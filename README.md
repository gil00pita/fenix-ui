<p align="center">
  <a href="https://github.com/gil00pita/fenix-ui">
    <img width="200" src="assets/Logo-Only.png">
  </a>
</p>

<h1 align="center">Fenix UI</h1>

<div align="center">
An enterprise-class UI design language build with React UI library and Styled Components.
</div>

## Contents

- [Contents](#contents)
- [Built with](#built-with)
- [Features](#features)
- [Why?](#why)
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

## Built with

<p align="center">
  <a href="https://github.com/gil00pita/fenix-ui">
    <img width="100%" src="assets/Tecnologies.png">
  </a>
</p>

- ⚛️ Create React App 3 (React 16.8)
- 📖 Styled Components
- 📖 Storybook 5
- 🐉 Lerna 3
- 🐈 Yarn Workspaces

## Features

- ✨ Host Multiple CRA Apps, Component Libraries & Storybooks in one Monorepo
- 🔥 Hot Reload all Apps, Components & Storybooks
- 👨‍🔬 Test all workspaces with Eslint & Jest using one command

## Why?
Tired of using UI Kits? If you are looking to use a fully customizable UI Kits without having to mess around and overriding their styles, this library is for you, built with styled components witch makes easy to override via props.
Each component is carefully build with in mind of overriding theirs styles via props or via a single theme [file](https://github.com/gil00pita/fenix-ui/tree/master/packages/ui-kit/src/Atoms/Themes), please check the documentation or the storybook in order to see in more details.
We also added the possibility to add opensource icons libraries by including [react-icons](https://github.com/react-icons/react-icons#readme) library, just clone the libarary into `packages/icons-lib/icons/src` folder and add the library url on this [file](https://github.com/gil00pita/fenix-ui/blob/master/packages/icons-lib/icons/src/icons/index.js) after that just run the `make build-icons` script in order use icons. There is also a icon search to make you easier to find the icons, just run `make launch-icon-gallery` to open the gallery so you can lookup the icons you need.

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

TODO

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

- [ ] Affix
- [x] Avatar
- [ ] Badge
- [ ] Checkbox
- [x] Divider
- [x] Icons
- [ ] Progress
- [ ] Skeleton
- [x] Tooltip
- [x] Typography
- [x] Palette
- [ ] Radio
- [x] Themes
- [x] GlobalStyles
- [ ] Switch
- [ ] Space

### Molecules

- [ ] Anchor
- [ ] Breadcrumb
- [ ] BackTop
- [x] Button
- [ ] Charts
- [ ] Empty Spaces
- [ ] Input
- [ ] InputNumber
- [ ] PageHeader
- [ ] Pagination
- [ ] Slider
- [ ] Steps
- [ ] Tabs
- [ ] Upload
- [ ] Grid
- [ ] Dropdown Button
- [ ] Dropdown Select
- [ ] Layout
- [ ] Tag

### Organisms

- [ ] Alert
- [ ] AutoComplete
- [ ] Calendar
- [ ] Card
- [ ] Caousel
- [ ] Cascader
- [ ] Collapse
- [ ] Comment
- [ ] DatePicker
- [ ] Descriptions
- [ ] Drawer
- [ ] Form
- [ ] Items Groups
- [ ] List
- [ ] Mentions Field
- [ ] Menu
- [ ] Message
- [ ] Modal
- [ ] Notification (Toasts)
- [ ] Pop confirm
- [ ] Popover
- [ ] Rate
- [ ] Result
- [ ] Spin
- [ ] Statistic (Stats)
- [ ] Table
- [ ] Timeline
- [ ] TimePicker
- [ ] Transfer
- [ ] Tree
- [ ] TreeSelect
