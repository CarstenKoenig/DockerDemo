FROM codesimple/elm:0.18 as elmBuilder
ENV BUILD=/app
RUN mkdir -p $BUILD
RUN mkdir -p $BUILD/dist
COPY ./client/Elm $BUILD
WORKDIR $BUILD
RUN elm make --yes src/Main.elm --output ./dist/todo.js


FROM wiegand/stack-build:lts-11.13 as haskellBuilder
ENV BUILD=/app
RUN mkdir -p $BUILD
COPY ./server/Haskell $BUILD
WORKDIR $BUILD
RUN make deploy


FROM ubuntu:16.04  
EXPOSE 8080
RUN apt-get update
RUN apt-get install --yes libgmp-dev
RUN apt-get install --yes libpq-dev
RUN mkdir -p /data
WORKDIR /app
RUN mkdir -p static
COPY ./static /app/static/
COPY --from=elmBuilder /app/dist/todo.js ./static/
COPY --from=haskellBuilder /app/dist .
ENV PORT 8080
ENV DB_PATH /data/todos.db
CMD ["./TodoServer-exe", "./static"]