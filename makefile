.PHONY: run
run: build
	$(MAKE) -C server/Haskell run

build: elm
	$(MAKE) -C server/Haskell build

elm:
	$(MAKE) -C client/Elm deploy

.PHONY: deploy	
deploy:
	$(shell mkdir -p ./dist)
	$(shell mkdir -p ./dist/static)
	cp ./static/* ./dist/static/ -r
	$(MAKE) -C client/Elm deploy
	$(MAKE) -C server/Haskell deploy

.PHONY: clean
clean: 
	$(MAKE) -C client/Elm clean
	$(MAKE) -C server/Haskell clean
	rm -rf ./dist

.PHONY: docker-build
docker-build:
	docker-compose -f ./docker/docker-compose.yml --project-directory . -p todo build --force-rm

.PHONY: docker-run
docker-run:
	docker-compose -f ./docker/docker-compose.yml --project-directory . -p todo up

.PHONY: docker-install
docker-install:
	docker-compose -f ./docker/docker-compose.yml --project-directory . -p todo up -d

.PHONY: docker-clean
docker-clean:
	docker-compose -f ./docker/docker-compose.yml --project-directory . -p todo rm -s -f -v
	docker volume rm todo_data
