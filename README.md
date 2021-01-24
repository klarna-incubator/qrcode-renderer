<p align="center">
  <a href="https://github.com/klarna-incubator/qrcode-renderer">
      <img src="https://raw.githubusercontent.com/klarna-incubator/qrcode-renderer/main/logo/logo.svg" alt="Logo" width="175" height="175">
  </a>
</p>

# QR Code Renderer

> is a dependency-free library to render QR Codes. The library makes it simple to integrate with any UI framework and comes with a prebuilt SVG renderer for the web.

[![Build Status][ci-image]][ci-url]
[![License][license-image]][license-url]
[![Developed at Klarna][klarna-image]][klarna-url]

The library consists of a core package (`@qrcode-renderer/core`) responsible for the encoding of the QR Code. It also provides utilities to integrate the renderer with any UI library.
This monorepo will also host "bridge" packages (`@qrcode-renderer/<ui-framework>`) for any UI libraries that we choose to natively support.

## Roadmap

- [x] Encode input following the QR Code specs
- [x] Apply error correction (Reed-Solomon) algorithm
- [x] Create final binary payload
- [x] Generate rendering matrix
- [x] Mask data inside matrix
- [x] Create rendering function

Renderers:

- [ ] SVG rendering
- [ ] React
- [ ] React Native

Future:

- [ ] Support Kanji encoding

## Getting started

TODO

## Example

TODO

## Development setup

```bash
yarn
```

## How to contribute

See our guide on [contributing](.github/CONTRIBUTING.md).

## Release History

See our [changelog](CHANGELOG.md).

## Acknowledgements

- Thanks to [Tracy (Tan Yun)](https://medium.com/@tanyuntracy) logo ❤️

## License

Copyright © 2020 Klarna Bank AB

For license details, see the [LICENSE](LICENSE) file in the root of this project.

The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
<http://www.denso-wave.com/qrcode/faqpatent-e.html>

<!-- Markdown link & img dfn's -->
[ci-image]: https://github.com/klarna-incubator/qrcode-renderer/workflows/CI/badge.svg
[ci-url]: https://github.com/klarna-incubator/qrcode-renderer/actions
[license-image]: https://img.shields.io/badge/license-Apache%202-blue?style=flat-square
[license-url]: http://www.apache.org/licenses/LICENSE-2.0
[klarna-image]: https://img.shields.io/badge/%20-Developed%20at%20Klarna-black?labelColor=ffb3c7&style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAALQAAAAAQAAAtAAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAABCgAwAEAAAAAQAAAA4AAAAA0LMKiwAAAAlwSFlzAABuugAAbroB1t6xFwAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAVBJREFUKBVtkz0vREEUhsdXgo5qJXohkUgQ0fgFNFpR2V5ClP6CQu9PiB6lEL1I7B9A4/treZ47c252s97k2ffMmZkz5869m1JKL/AFbzAHaiRbmsIf4BdaMAZqMFsOXNxXkroKbxCPV5l8yHOJLVipn9/vEreLa7FguSN3S2ynA/ATeQuI8tTY6OOY34DQaQnq9mPCDtxoBwuRxPfAvPMWnARlB12KAi6eLTPruOOP4gcl33O6+Sjgc83DJkRH+h2MgorLzaPy68W48BG2S+xYnmAa1L+nOxEduMH3fgjGFvZeVkANZau68B6CrgJxWosFFpF7iG+h5wKZqwt42qIJtARu/ix+gqsosEq8D35o6R3c7OL4lAnTDljEe9B3Qa2BYzmHemDCt6Diwo6JY7E+A82OnN9HuoBruAQvUQ1nSxP4GVzBDRyBfygf6RW2/gD3NmEv+K/DZgAAAABJRU5ErkJggg==
[klarna-url]: https://github.com/klarna-incubator
