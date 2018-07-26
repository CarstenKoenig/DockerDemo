{-# LANGUAGE TemplateHaskell, QuasiQuotes #-}
{-# LANGUAGE MultiParamTypeClasses, FlexibleContexts, TypeFamilies, GADTs #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
module DbPg
    ( Handle
    , Dom.TaskId
    , Dom.Task (..)
    , initDb
    , getTask
    , listTasks
    , insertTask
    , deleteTask
    , modifyTask
    ) where


import           Control.Monad.IO.Class (MonadIO, liftIO)
import           Control.Monad.Logger (runStderrLoggingT)
import           Control.Monad.Reader (MonadReader, ask)
import           Database.Persist ((=.))
import qualified Database.Persist.Sql as Sql
import qualified Database.Persist.Postgresql as PG
import qualified Database.Persist.TH as PTH
import           Data.Text (Text)
import qualified Models as Dom

PTH.share [PTH.mkPersist PTH.sqlSettings, PTH.mkMigrate "migrateAll"] [PTH.persistLowerCase|
Aufgabe
    text Text
    finished Bool
    deriving Show
|]


data Handle =
    Handle 
    { pghConnectionString :: PG.ConnectionString
    , pghPoolSize         :: Int
    }


initDb :: MonadIO m => PG.ConnectionString -> Int -> m Handle
initDb conStr poolSz = do
    runQuery handle $ Sql.runMigration migrateAll
    return handle
    where
        handle = Handle conStr poolSz


getTask :: (MonadReader Handle m, MonadIO m) => Dom.TaskId -> m (Maybe Dom.Task)
getTask tId = runQuery' $ fmap (toDomModel tId) <$> Sql.get (Sql.toSqlKey tId)


listTasks :: (MonadReader Handle m, MonadIO m) => m [Dom.Task]
listTasks = runQuery' $ map toDomModel' <$> Sql.selectList [] []


insertTask :: (MonadReader Handle m, MonadIO m) => Text -> m Dom.Task
insertTask txt = runQuery' $ do
    key <- Sql.insert $ Aufgabe txt False
    return $ Dom.Task (Sql.fromSqlKey key) txt False

deleteTask :: (MonadReader Handle m, MonadIO m) => Dom.TaskId -> m ()
deleteTask tId = runQuery' $ Sql.delete (Sql.toSqlKey tId :: AufgabeId)


modifyTask :: (MonadReader Handle m, MonadIO m) => Dom.Task -> m ()
modifyTask (Dom.Task tId txt fin) = runQuery' $
    Sql.update (Sql.toSqlKey tId) [ AufgabeText =. txt, AufgabeFinished =. fin ]

toDomModel' :: Sql.Entity Aufgabe -> Dom.Task
toDomModel' entity = 
    toDomModel (Sql.fromSqlKey $ Sql.entityKey entity) (Sql.entityVal entity)


toDomModel :: Dom.TaskId -> Aufgabe -> Dom.Task
toDomModel tId aufgabe =
    Dom.Task tId (aufgabeText aufgabe) (aufgabeFinished aufgabe)


runQuery' :: (MonadReader Handle m, MonadIO m) => 
    Sql.SqlPersistM a -> m a
runQuery' query = do
    handle <- ask
    runQuery handle query


runQuery :: (MonadIO m) =>
   Handle -> Sql.SqlPersistM a -> m a
runQuery handle query = liftIO $ 
    runStderrLoggingT 
    $ PG.withPostgresqlPool (pghConnectionString handle) (pghPoolSize handle) 
    $ \pool -> liftIO $ Sql.runSqlPersistMPool query pool

