<p align="center">
  <a href="https://localazy.com">
    <img src="https://localazy.com/directus9/assets/9fc36b9c-81b7-4dbf-bd82-b64cd984090f" width="285" height="50" alt="Localazy" >
  </a>
</p>

# 📦 localazy/release

Localazy GitHub actions for automating the release process.

## 🔧 Installation

Due to the limitations of GitHub's default action authorization, you cannot trigger another action with events
dispatched by the original action. For example, if a GitHub action creates a pull request it will not run any checks for
that PR. This is intentional to prevent infinite actions loop, although it can be bypassed by using different
authorization token, therefore you need to create GitHub app for sole purpose of CI authorization and pass **app id**
and **app private key** to the actions.

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
  ci:
    name: CI Init
    runs-on: [ self-hosted, Linux ]
    outputs:
      action: ${{ steps.init.outputs.action }}
    steps:
      - id: init
        uses: localazy/release/init@v2

  prepare:
    name: Prepare Release PR
    needs: ci
    if: needs.ci.outputs.action == 'prepare'
    runs-on: [ self-hosted, Linux ]
    steps:
      - uses: localazy/release/prepare@v2
        with:
          app-id: ${{ secrets.AUTH_APP_ID }}
          app-key: ${{ secrets.AUTH_APP_KEY }}

  publish:
    name: Publish Release
    needs: ci
    if: needs.ci.outputs.action == 'publish'
    runs-on: [ self-hosted, Linux ]
    steps:
      - uses: localazy/release/publish@v2
        with:
          app-id: ${{ secrets.AUTH_APP_ID }}
          app-key: ${{ secrets.AUTH_APP_KEY }}
```

### Release private NPM package

You don't need to pass `npm-token` if you have `_auth` set in your `.npmrc` file.

```yml
jobs:
  publish:
    name: Publish Release
    needs: ci
    if: needs.ci.outputs.action == 'publish'
    runs-on: [ self-hosted, Linux ]
    steps:
      - uses: localazy/release/publish@v2
        with:
          app-id: ${{ secrets.AUTH_APP_ID }}
          app-key: ${{ secrets.AUTH_APP_KEY }}
          npm-publish: private
          npm-token: ${{ secrets.NPM_AUTH_TOKEN }}
```

### Release public NPM package

```yml
jobs:
  publish:
    name: Publish Release
    needs: ci
    if: needs.ci.outputs.action == 'publish'
    runs-on: [ self-hosted, Linux ]
    steps:
      - uses: localazy/release/publish@v2
        with:
          app-id: ${{ secrets.AUTH_APP_ID }}
          app-key: ${{ secrets.AUTH_APP_KEY }}
          npm-publish: public
          npm-token: ${{ secrets.NPM_AUTH_TOKEN }}
```

### Bump major version after release

Latest commit will be tagged with package major version, for example version `1.2.3` will be tagged with `1`.

You can use `major-bump-tag-prefix` option to specify a prefix for tag, for example `major-bump-tag-prefix: v` will
generate tag `v1`.

```yml
jobs:
  publish:
    name: Publish Release
    needs: ci
    if: needs.ci.outputs.action == 'publish'
    runs-on: [ self-hosted, Linux ]
    steps:
      - uses: localazy/release/publish@v2
        with:
          app-id: ${{ secrets.AUTH_APP_ID }}
          app-key: ${{ secrets.AUTH_APP_KEY }}
          major-bump: true
          major-bump-tag-prefix: v
```

## 📚 Documentation

### Secrets

| Secret           | Description                        |
|------------------|------------------------------------|
| `AUTH_APP_ID`    | `Localazy CI Auth` app ID          |
| `AUTH_APP_KEY`   | `Localazy CI Auth` app private key |
| `NPM_AUTH_TOKEN` | NPM authorization token            |

### Actions

#### localazy/release/init@v2

##### Outputs

| Output name | Description                                           |
|-------------|-------------------------------------------------------|
| `action`    | Detected job. Possible values `prepare` or `publish`. |

#### localazy/release/prepare@v2

##### Inputs

| Input name          | Description                         | Required | Default |
|---------------------|-------------------------------------|----------|---------|
| `app-id`            | GitHub app id.                      | `true`   | *N/A*   |
| `app-key`           | GitHub app private key.             | `true`   | *N/A*   |
| `run-after-install` | Bash code to run after npm install. | `false`  | `""`    |
| `node-version`      | Node version.                       | `false`  | `16`    |

#### localazy/release/publish@v2

##### Inputs

| Input name              | Description                                                      | Required | Default                      |
|-------------------------|------------------------------------------------------------------|----------|------------------------------|
| `app-id`                | GitHub app id.                                                   | `true`   | *N/A*                        |
| `app-key`               | GitHub app private key.                                          | `true`   | *N/A*                        |
| `npm-publish`           | Publish to NPM registry. Possible values: `public` or `private`. | `false`  | `""`                         |
| `npm-private-registry`  | Private NPM registry.                                            | `false`  | <small>[1]</small>           |
| `npm-token`             | NPM auth token.                                                  | `false`  | `""`                         |
| `npm-build`             | Build package command. Only executed if `npm-publish` is set.    | `false`  | `npm run build --if-present` |
| `major-bump`            | Bump major version tag after release.                            | `false`  | `false`                      |
| `major-bump-tag-prefix` | Major version tag prefix.                                        | `false`  | `""`                         |
| `node-version`          | Node version.                                                    | `false`  | `16`                         |

<small>[1]</small> `"https://maven.localazy.com/repository/npm-private/"`

#### localazy/release/setup-npm@v2

This action is internal, it's called by `localazy/release/prepare` and `localazy/release/publish`.

##### Inputs

| Input name          | Description                         | Required | Default |
|---------------------|-------------------------------------|----------|---------|
| `run-after-install` | Bash code to run after npm install. | `false`  | `""`    |
| `node-version`      | Node version.                       | `false`  | `16`    |
