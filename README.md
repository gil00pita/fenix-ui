<p align="center">
  <a href="https://github.com/gil00pita/fenix-ui">
    <img width="200" src="assets/Logo-Only.png">
  </a>
</p>

<h1 align="center">Fenix UI</h1>

<div align="center">
An enterprise-class UI design language build with React UI library and Styled Components.
</div>

![Join us on Discord]()

## Built with
<p align="center">
  <a href="https://github.com/gil00pita/fenix-ui">
    <img width="200" src="assets/Tecnologies.png">
  </a>
</p>


- ⚛️ Create React App 3 (React 16.8)
- 📖 Storybook 5
- 📖 Styled Components
- 🐈 Yarn Workspaces
- 🐉 Lerna 3

## Features

- ✨ Host Multiple CRA Apps, Component Libraries & Storybooks in one Monorepo
- 🔥 Hot Reload all Apps, Components & Storybooks
- 👨‍🔬 Test all workspaces with Eslint & Jest using one command

## Contents

- [Built with](#built-with)
- [Features](#features)
- [Contents](#contents)
- [Setup](#setup)
  - [Pre-Requisites](#pre-requisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Adding to your project dependencies](#adding-to-your-project-dependencies)
  - [Starting Project in Workspace](#starting-project-in-workspace)
  - [Starting The Storybook](#starting-the-storybook)
  - [Linting & Testing](#linting--testing)
  - [Creating a New CRA App](#creating-a-new-cra-app)
- [How Does It Work?](#how-does-it-work)
- [Atomic Design Components](#atomic-design-components)
  - [Atoms](#atoms)
  - [Molecules](#molecules)
  - [Organisms](#organisms)

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
## Usage

### Adding to your project dependencies

TODO

### Starting Project in Workspace

From your project root type start command for desired app

```bash
yarn workspace @fenix-ui/app-single-comp start
```

All available `start` scripts

```json
"scripts": {
    "start:app-ant-design": "yarn workspace @fenix-ui/app-ant-design-rewired start",
    "start:app-multi": "yarn workspace @fenix-ui/app-multi-comps start",
    "start:app-single": "yarn workspace @fenix-ui/app-single-comp start",
    "start:app-ts": "yarn workspace @fenix-ui/app-typescript start",
    "start:storybook": "yarn workspace @fenix-ui/storybook storybook",
    "start:storybook-ts": "yarn workspace @fenix-ui/storybook-typescript storybook",
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

## Atomic Design Components

### Atoms

- [x] Avatar
- [] Badge
- [] Checkbox
- [] Divider
- [] Icon
- [] Progress
- [] Skeleton
- [] Tooltip
- [] Typography

### Molecules

- [] Breadcrumb
- [x] Button
- [] Charts
- [] Input
- [] InputNumber
- [] PageHeader
- [] Pagination
- [] Radio
- [] Slider
- [] Steps
- [] Switch
- [] Tabs
- [] Upload

### Organisms

- [] Alert
- [] AutoComplete
- [] Calendar
- [] Card
- [] Carousel
- [] Cascader
- [] Collapse
- [] Comment
- [] DatePicker
- [] Descriptions
- [] Drawer
- [] Dropdown Button
- [] Dropdown Select
- [] Empty Spaces
- [] Form
- [] Grid
- [] Items Groups
- [] Layout
- [] List
- [] Mentions Field
- [] Menu
- [] Message
- [] Modal
- [] Notification (Toasts)
- [] Pop confirm
- [] Popover
- [] Rate
- [] Result
- [] Spin
- [] Statistic (Stats)
- [] Table
- [] Tag
- [] Timeline
- [] TimePicker
- [] Transfer
- [] Tree
- [] TreeSelect
