module Main where

import System.Environment (getArgs)
import App (startApp)

main :: IO ()
main = do
  staticPath <- head <$> getArgs
  startApp staticPath
