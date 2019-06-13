# Orion

In Loco's component library, based on React Semantic UI.

You can see and interact with the components [here](https://inloco.github.io/orion).

## Usage

1. Install via NPM or Yarn:

```sh
  npm install --save @inloco/orion
  #or
  yarn add @inloco/orion
```

2. Add Material Icons Font to your HTML:

```html
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

3. Import Orion's CSS on your react app:

```js
import '@inloco/orion/dist/orion.css'
```

4. Import and use Orion's components as needed:

```js
import { Button, Dropdown } from '@inloco/orion'
```

## Contributing

We're using `yarn`'s lockfile, so we'll assume that it's the one being used, but note that `npm` will also work.

### Setup

To setup the project, you just need to have [Yarn](https://yarnpkg.com/en/) installed and run it to install the project's dependencies:

```sh
  yarn
```

Then we run the command below to update css with our customizations:

```sh
  yarn run build:css
```

### Watch (Hot reloading)

To update css on file change:

```sh
  yarn run watch
```

### Storybook

We're using [Storybook](https://storybook.js.org/), to easily see and test the components.

Run it with:

```sh
  yarn storybook
```

Then open it at the url indicated on the terminal, probably: `http://localhost:9001/`.

## Release

To release, follow these steps:

1. Run `yarn publish`.
2. Type the version to be released.
3. Push the generated commit and the tag to master:

```sh
git push origin master --tags
```

### Deploying Storybook

After releasing a new version, our gh page with Storybook is automatically.

In case it's necessary to do this manually though, just run this simple yarn script:

```sh
yarn deploy:storybook
```
