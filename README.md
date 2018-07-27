# Demo-App

this is a simple *TODO-App* demonstrating:

- Haskell / Servant
- Elm
- Docker (-compose) with
  - Nginx
  - PostgreSQL
  - compiled servant app

## Backends

- [Haskell](./server/Haskell)

## Client

- [Elm](./client/Elm)

## Build

### using docker

- run `make docker-build` to build the service
- run `make docker-run` to run the service attached
- run `make docker-install` to run the service detached (background)
- run `make docker-clean` to remove the service and the docker-volume

### local using stack

run `make deploy` to deploy the application to `./dist`

the application assumes a PostgreSQL-DB present and you have to provide
the following settings via environment-variables (postgres default behavior with connection-strings):

- `PGUSER` the user that will connect to postgres
- `PGPASSWORD` the password for the connecting user
- `PGHOST` hostname of the database (probably `localhost`)
- `DB_CONSTR` (optional/alternative) - connection-string used by the app - default is `"dbname='Todos'"` so this assumes that there is a `Todos` database present on postgres

there is a way to use this app with just `SQLite` - look for lines like

    import qualified DbPg as Db

in `src/RestApi.hs` and `src/App.hs` and change it to

    import qualified Db

you will also have to change the line

    dbHandle <- Db.initDb dbCon 4

in `App.hs` into

    dbHandle <- Db.initDb "./todos.db"