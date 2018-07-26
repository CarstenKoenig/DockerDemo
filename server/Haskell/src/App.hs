{-# LANGUAGE DataKinds         #-}
{-# LANGUAGE TypeOperators     #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE FlexibleContexts  #-}


module App
    ( startApp
    , app
    ) where


import           Data.ByteString (ByteString)
import           Data.ByteString.Char8 (pack)
import           Data.Maybe (fromMaybe)
import qualified DbPg as Db
import           Network.Wai (Application)
import           Network.Wai.Middleware.Cors
import           Network.Wai.Handler.Warp (run)
import           Servant
import           System.Environment (lookupEnv)
import           Text.Read (readMaybe)
import qualified RestApi
import           RestApi (RestApi)
import qualified RouteApi
import           RouteApi (RouteApi)
import qualified Ws


getPort :: IO Int
getPort =
  fromMaybe 8080 . (>>= readMaybe) <$> lookupEnv "PORT"


getDbCon :: IO ByteString
getDbCon =
  maybe "dbname='Todos'" pack <$> lookupEnv "DB_CONSTR"


startApp :: FilePath -> IO ()
startApp staticPath = do
  dbCon <- getDbCon
  putStrLn "initializing Database.. "
  dbHandle <- Db.initDb dbCon 4
  wsHandle <- Ws.initialize

  port <- getPort
  putStrLn $ "starting Server on " ++ show port
  run port $ app staticPath dbHandle wsHandle


app :: FilePath -> Db.Handle -> Ws.Handle -> Application
app staticPath dbHandle wsHandle =
  myCors $
  Servant.serve (Proxy :: Proxy (RestApi :<|> RouteApi)) $
    RestApi.server dbHandle wsHandle :<|> RouteApi.server staticPath
  where
    myCors = cors $ const $ Just myPolicy
    myPolicy = simpleCorsResourcePolicy { corsMethods = myMethods
                                        , corsRequestHeaders = ["Content-Type"] }
    myMethods = simpleMethods ++ ["PUT", "DELETE", "OPTIONS"]
