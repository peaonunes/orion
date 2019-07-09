# Orion Monorepo

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=inloco/orion)](https://dependabot.com)

In Loco's monorepo for [Orion](https://github.com/inloco/orion/tree/master/packages/orion) and [Atomic Bomb](https://github.com/inloco/orion/tree/master/packages/atomic-bomb).

Please refer to their own README files for more info.

## Contributing

Since we are using `yarn workspaces`, `yarn` is required.

### Setup

To setup the project, you just need to have [Yarn](https://yarnpkg.com/en/) installed and run it to install the project's dependencies:

```sh
  yarn
```

Then run the command below to update build atomic-bomb:

```sh
  yarn atomic-bomb:build
```

### Watch (Hot reloading)

To update css on file change:

```sh
  yarn orion:watch
```

### Storybook

We're using [Storybook](https://storybook.js.org/), to easily see and test the components.

Run it with:

```sh
  yarn orion:storybook
```

Then open it at the url indicated on the terminal, probably: `http://localhost:9001/`.

## Release

To release, follow these steps:

1. Run `yarn release` (yes, it's **release**, not **publish**!) or `lerna publish` (in this case you'll need a globally installed Lerna).
2. Select the versions you wish to publish for each modified package.
3. You're done!

### Deploying Storybook

After releasing a new version, our gh page with Storybook is automatically deployed.

In case it's necessary to do this manually though, just run this simple yarn script:

```sh
yarn orion:deploy:storybook
```
