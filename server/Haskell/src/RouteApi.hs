{-# LANGUAGE DataKinds         #-}
{-# LANGUAGE TypeOperators     #-}
{-# LANGUAGE FlexibleContexts  #-}


module RouteApi
    ( RouteApi
    , server
    ) where


import           Data.Aeson ()
import           Data.Aeson.TH ()
import           Data.Text (Text)
import qualified Page
import           Servant
import           Servant.HTML.Blaze (HTML)
import           Text.Blaze.Html4.Strict (Markup)


type RouteApi =
  "static" :> Raw
  :<|> CaptureAll "segments" Text :> Get '[HTML] Markup



server :: FilePath -> Server RouteApi
server staticPath = staticHandler :<|> pageHandler
  where
    pageHandler _ =
      return Page.index

    staticHandler =
      Servant.serveDirectoryWebApp staticPath