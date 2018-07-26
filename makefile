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