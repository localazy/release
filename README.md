<p align="center">
  <a href="https://localazy.com">
    <img src="https://localazy.com/directus9/assets/9fc36b9c-81b7-4dbf-bd82-b64cd984090f" width="285" height="50" alt="Localazy" >
  </a>
</p>

# 📦 localazy/release@v1

Localazy GitHub action for automating the release process.

## 🔧 Installation

Due to the limitations of GitHub's default action authorization, you cannot trigger another action with events
dispatched by the original action. For example, if a GitHub action creates a pull request it will not run any checks for
that PR. This is intentional to prevent infinite actions loop, although it can be bypassed by using different
authorization token, therefore you need to create GitHub app for sole purpose of CI authorization and pass **app id**
and **app private key** to the `localazy/release` action.

https://github.com/peter-evans/create-pull-request/blob/main/docs/concepts-guidelines.md#authenticating-with-github-app-generated-tokens

## 🚀 Usage

### Example

```yml
name: Release CI

on:
  push:
    branches:
      - main

permissions:
  contents: write
  pull-requests: write

jobs:
  prepare:
    name: Prepare Release
    if: github.event.head.ref != 'release' && !contains(github.event.commits[0].message, '🚀 release:')
    runs-on: [ self-hosted, Linux ]
    steps:
      - uses: localazy/release@v1
        with:
          action: prepare
          app-id: ${{ secrets.AUTH_APP_ID }}
          app-key: ${{ secrets.AUTH_APP_KEY }}

  release:
    name: Release
    if: github.event.head.ref == 'release' || contains(github.event.commits[0].message, '🚀 release:')
    runs-on: [ self-hosted, Linux ]
    steps:
      - uses: localazy/release@v1
        with:
          action: release
          app-id: ${{ secrets.AUTH_APP_ID }}
          app-key: ${{ secrets.AUTH_APP_KEY }}
```

### Release NPM package

```yml
jobs:
  release:
    name: Release
    if: ...
    runs-on: [ self-hosted, Linux ]
    steps:
      - uses: localazy/release@v1
        with:
          action: release
          app-id: ${{ secrets.AUTH_APP_ID }}
          app-key: ${{ secrets.AUTH_APP_KEY }}
          npm-publish: true
          npm-registry: https://registry.npmjs.org
          npm-token: ${{ secrets.NPM_AUTH_TOKEN }}
```

> You need to provide `NPM_AUTH_TOKEN` secret.

### Bump major version after release

Latest commit will be tagged with package major version, for example version `1.2.3` will be tagged with `1`.

```yml
jobs:
  release:
    name: Release
    if: ...
    runs-on: [ self-hosted, Linux ]
    steps:
      - uses: localazy/release@v1
        with:
          action: release
          app-id: ${{ secrets.AUTH_APP_ID }}
          app-key: ${{ secrets.AUTH_APP_KEY }}
          major-bump: true
```

## 📚 Documentation

### Inputs

| Input name              | Description                                                             | Required | Default                        |
|-------------------------|-------------------------------------------------------------------------|----------|--------------------------------|
| `action`                | Possible actions: `prepare` or `release`.                               | `true`   | *N/A*                          |
| `app-id`                | GitHub app id.                                                          | `true`   | *N/A*                          |
| `app-key`               | GitHub app private key.                                                 | `true`   | *N/A*                          |
| `npm-publish`           | Publish to NPM registry.                                                | `false`  | `"false"`                      |
| `npm-registry`          | NPM registry.                                                           | `false`  | `"https://registry.npmjs.org"` |
| `npm-token`             | NPM auth token.                                                         | `false`  | `""`                           |
| `npm-build`             | Build package command. Only executed if `npm-publish` is set to `true`. | `false`  | `npm run build`                |
| `major-bump`            | Bump major version tag after release.                                   | `false`  | `"false"`                      |
| `major-bump-tag-prefix` | Major version tag prefix.                                               | `false`  | `""`                           |

### Schema

![A picture is worth a thousand words.](docs/assets/release-ci.png)
