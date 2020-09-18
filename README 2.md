![Fenix UI](https://i.imgur.com/7snWXD0.png)

![Join us on Discord]()

## Features

- ⚛️ Create React App 3 (React 16.8)
- 📖 Storybook 5
- 🐈 Yarn Workspaces
- 🐉 Lerna 3
- ✨ Host Multiple CRA Apps, Component Libraries & Storybooks in one Monorepo
- 🔥 Hot Reload all Apps, Components & Storybooks
- 👨‍🔬 Test all workspaces with Eslint & Jest using one command

## Contents

- [Features](#features)
- [Contents](#contents)
- [Setup](#setup)
  - [Pre-Requisites](#pre-requisites)
  - [Installation](#installation)
- [Atomic Design Components](#atomic-design-components)
  - [Atoms](#atoms)
  - [Molecules](#molecules)
  - [Organisms](#organisms)
- [Usage](#usage)
  - [Adding to your project dependencies](#adding-to-your-project-dependencies)
  - [Starting Project in Workspace](#starting-project-in-workspace)
  - [Starting The Storybook](#starting-the-storybook)
  - [Linting & Testing](#linting--testing)
  - [Creating a New CRA App](#creating-a-new-cra-app)
- [How Does It Work?](#how-does-it-work)

## Setup

### Pre-Requisites

- Yarn 1.13.0
- Node 11.14.0
- Gnuwin32 3.81 on [Windows](http://gnuwin32.sourceforge.net/packages/make.htm)

### Installation

```bash
git clone git@git.gilalvaro.com:3022/gil00pita/fenix-ui.git
cd fenix-ui
make
```

## Atomic Design Components

### Atoms

- Avatar ✅
- Badge ✅
- Checkbox ✅
- Divider ✅
- Icon ✅
- Progress ‼️
- Skeleton ‼️
- Tooltip ✅
- Typography ✅

### Molecules

- Breadcrumb ‼️
- Button ✅
- Charts
- Input ✅
- InputNumber ‼️
- PageHeader ✅
- Pagination ‼️
- Radio ✅
- Slider ✅
- Steps ✅
- Switch ✅
- Tabs ✅
- Upload ‼️

### Organisms

- Alert ✅
- AutoComplete ‼️
- Calendar ‼️
- Card ✅
- Carousel ‼️
- Cascader ‼️
- Collapse ✅
- Comment ‼️
- DatePicker ‼️
- Descriptions ‼️
- Drawer ✅
- Dropdown Button ‼️
- Dropdown Select‼️
- Empty Spaces ‼️
- Form ✅
- Grid ‼️
- Items Groups
- Layout ‼️
- List ✅
- Mentions Field‼️
- Menu ‼️
- Message ‼️
- Modal ✅
- Notification (Toasts) ✅
- Pop confirm ‼️
- Popover ✅
- Rate ‼️
- Result ‼️
- Spin ‼️
- Statistic (Stats) ‼️
- Table ✅
- Tag ‼️
- Timeline ‼️
- TimePicker ‼️
- Transfer ‼️
- Tree ‼️
- TreeSelect ‼️

## Usage

### Adding to your project dependencies

TODO

### Starting Project in Workspace

From your project root type start command for desired app

```bash
yarn workspace @project/app-single-comp start
```

All available `start` scripts

```json
"scripts": {
    "start:app-ant-design": "yarn workspace @project/app-ant-design-rewired start",
    "start:app-multi": "yarn workspace @project/app-multi-comps start",
    "start:app-single": "yarn workspace @project/app-single-comp start",
    "start:app-ts": "yarn workspace @project/app-typescript start",
    "start:storybook": "yarn workspace @project/storybook storybook",
    "start:storybook-ts": "yarn workspace @project/storybook-typescript storybook",
    ...
  }
```

### Starting The Storybook

```bash
make storybook
```

### Linting & Testing

```bash
yarn workspace <workspace-root> test
```

### Creating a New CRA App

Use Create React App's `--scripts-version` flag to create a new React App with Yarn Workspaces support.

```bash
create-react-app --scripts-version @react-workspaces/react-scripts my-app
```

To create new TS app use Create React App's `--template` flag with `--scripts-version` flag to create a new React App with Yarn Workspaces support and Typescript.

```bash
npx create-react-app --scripts-version @react-workspaces/react-scripts --template typescript my-ts-app
```

## How Does It Work?

React Workspaces Playground uses a custom version of `react-scripts` under the hood. The custom `react-scripts` is an NPM package to use in place of the `react-scripts` dependency that usually ships with Create React App. See: ([@react-workspaces/react-scripts](https://www.npmjs.com/@react-workspaces/react-scripts)) on NPM.

Support for Yarn Workspaces was added by:

1. Adding [yarn-workspaces.js](https://github.com/react-workspaces/create-react-app/blob/master/packages/react-scripts/config/yarn-workspaces.js) file to resolve workspaces modules.

1. Updating the Webpack config:

   - Use `main:src` in `package.json` for loading development source code.

   - Use `production` or `development` settings based on your `yarn workspaces` settings in your `<workspaces-root>/package.json`:

     ```json
     {
       "workspaces": {
         "packages": ["packages/ui-kit", "packages/storybook"],
         "production": true,
         "development": true,
         "package-entry": "main:src"
       }
     }
     ```

Minimal updates to the Webpack config were required.

Diff: `webpack.config.js`

```diff
--- a/./facebook/react-scripts/config/webpack.config.js
+++ b/react-workspaces/react-scripts/config/webpack.config.js
@@ -9,7 +9,6 @@
'use strict';

const fs = require('fs');
const isWsl = require('is-wsl');
const path = require('path');
const webpack = require('webpack');
const resolve = require('resolve');
@@ -28,15 +27,14 @@ const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeM
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const paths = require('./paths');
const modules = require('./modules');
+const workspaces = require('./workspaces');
const getClientEnvironment = require('./env');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
// @remove-on-eject-begin
const getCacheIdentifier = require('react-dev-utils/getCacheIdentifier');
// @remove-on-eject-end

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
@@ -53,12 +51,22 @@ const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

+const workspacesConfig = workspaces.init(paths);
+
// This is the production and development configuration.
// It is focused on developer experience, fast rebuilds, and a minimal bundle.
module.exports = function(webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

+  const workspacesMainFields = [workspacesConfig.packageEntry, 'main'];
+  const mainFields =
+    isEnvDevelopment && workspacesConfig.development
+      ? workspacesMainFields
+      : isEnvProduction && workspacesConfig.production
+        ? workspacesMainFields
+        : undefined;
+
  // Webpack uses `publicPath` to determine where the app is being served from.
  // It requires a trailing slash, or the file assets will get an incorrect path.
  // In development, we always serve from the root. This makes config easier.
@@ -279,6 +282,7 @@ module.exports = function(webpackEnv) {
      extensions: paths.moduleFileExtensions
        .map(ext => `.${ext}`)
        .filter(ext => useTypeScript || !ext.includes('ts')),
+      mainFields,
      alias: {
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
@@ -330,7 +335,11 @@ module.exports = function(webpackEnv) {
              loader: require.resolve('eslint-loader'),
            },
          ],
-          include: paths.appSrc,
+          include: isEnvDevelopment && workspacesConfig.development
+          ? [paths.appSrc, workspacesConfig.paths]
+          : isEnvProduction && workspacesConfig.production
+            ? [paths.appSrc, workspacesConfig.paths]
+            : paths.appSrc,
        },
        {
          // "oneOf" will traverse all following loaders until one will
@@ -352,7 +361,12 @@ module.exports = function(webpackEnv) {
            // The preset includes JSX, Flow, TypeScript, and some ESnext features.
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
-              include: paths.appSrc,
+              include:
+                isEnvDevelopment && workspacesConfig.development
+                  ? [paths.appSrc, workspacesConfig.paths]
+                  : isEnvProduction && workspacesConfig.production
+                    ? [paths.appSrc, workspacesConfig.paths]
+                    : paths.appSrc,
              loader: require.resolve('babel-loader'),
              options: {
                customize: require.resolve(
```
