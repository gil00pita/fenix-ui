all: dependencies install-repos build-icons build-utils watch

cleanStart: cleanProject all

dependencies:
	$(info "Installing Dependencies")
	yarn
	npx next telemetry disable

install-repos: clean-icons clone-MaterialDesignIcons clone-AntDesignIcons

# Don't forget to add the icons folders into
# `packages\icons-lib\icons\package.json` clean task
clean-icons:
	$(info "Cleaning ALL Icons")
	cd packages/icons-lib/icons/ && yarn run clean

clone-MaterialDesignIcons:
	$(info "Cloning Material UI Icons")
	cd packages/icons-lib/icons/src/icons && git clone https://github.com/Templarian/MaterialDesign-SVG.git

clone-AntDesignIcons:
	$(info "Cloning Material UI Icons")
	cd packages/icons-lib/icons/src/icons && git clone https://github.com/ant-design/ant-design-icons.git

build-icons:
	$(info "Building Icons")
	cd packages/icons-lib/icons && yarn build
	cd packages/icons-lib/icon-gallery && yarn run next build

build-utils:
	$(info "Building Utils Package")
	cd packages/utils && yarn build

watch:
	yarn run ultra -r --filter "@fenix-ui/*" watch

lint:
	yarn run ultra -r --filter "@fenix-ui/*" lint

watch-ui:
	cd packages/ui-kit && yarn run watch

watch-utils:
	cd packages/utils && yarn run watch

launch-icon-gallery:
	$(info "Launching Icons Gallery")
	cd packages/icons-lib/icon-gallery && yarn start

storybook:
	$(info "Launching Storybook")
	cd packages/storybook && yarn storybook

cleanProject:
	$(warning "Cleaning Project")
	rm -rf node_modules
	rm -rf packages/icons-lib/icon-gallery/node_modules
	rm -rf packages/icons-lib/icons/node_modules
	rm -rf packages/storybook/node_modules
	rm -rf packages/ui-kit/node_modules
	rm -rf packages/utils/node_modules
	rm -rf packages/utils/lib
