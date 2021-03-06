# QR Code renderer core package

The core package is responsible for creating the module definition out of the raw data, as well as providing common functionality for all renderer packages.

When creating your renderer package in the `@qrcode-renderer/XXX` format, be sure to add the core package as a dependency.

## QR Code concepts

### Level

The level of a QR Code defines the "quality" of it.
The better the level of the QR Code, the more resilient it is to faults, like missing parts or blurring.

It's defined as 'L' (worse), 'M', 'Q', 'H' (best).

When using `createModuleDefinition`, you can enforce a level through the `level` option.
When not provided, it will calculate what's the optimal level for the minimum size based on the data input provided.

## Version

QR Codes can come in a variety of sizes, and the version is what defines which one we'll generate. Greater versions can hold more data, but also require more space to be rendered.

When using `createModuleDefinition`, you can choose a minimum version through the `minimumVersion` option.
It will ensure the version chosen will be _at least_ the provided one.
Notice that the final version can grow if needed, depending on the data input provided.

## API

### createModuleDefinition

This is the first function your renderer should be calling. It calculates and positions all QR Code modules according to the spec, generating a definition matrix in the process.

```ts
import { createModuleDefinition } from '@qrcode-renderer/core'

// ...
const definition = createModuleDefinition(input, { minimumVersion, level })
// ...
```

#### The definition matrix

`createModuleDefinition` will return the definition matrix, which consists in a matrix of pixel values.
Each white pixel is represented as a 0, each black pixel is represented as a 1.

The job of the renderer is to get this matrix and create some kind of visual vessel to it, like a png or an svg.

```ts
const [firstLine] = createModuleDefinition('qrcode-renderer')

// Note that the first four lines will _always_ be white.
firstLine.forEach(pixel => console.log(pixel === 0 ? 'white' : 'black')) // logs `white` several times
```

## Local Development

Below is a list of commands you will probably find useful.

### `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
