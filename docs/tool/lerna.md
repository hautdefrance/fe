---
title: How to use lerna to manage release of your monorepo.
date: 2018/9/25 7:20:08 PM
tag:
    - lerna
    - yarn
    - npm
    - tool
---

This article doesn't describe the detail of how `lerna` or `yarn workspace` work. but focuses on the release management with `lerna`.

## What's lerna?

Lerna is a tool that optimizes the workflow around managing multi-package repositories (we called it `monorepo`) with git and npm. Internally it uses Yarn or the npm CLI to bootstrap (i.e. install all third party dependencies for each package) a project.

A typical monorepo jest is like this:

```
| jest/
| ---- package.json
| ---- packages/
| -------- jest-matcher-utils/
| ------------ package.json
| -------- jest-diff/
| ------------ package.json
```

The major two thing that lerna can help you is:

1. `lerna bootstrap`: help you to install and link the dependencies in the repo together.
2. `lerna publish`: help you to publish multiple packages with only one step.

## Yarn workspaces

Lerna calls `yarn install` multiple times for each package since each `package.json` since each `package.json` is is considered independent. but with `yarn workspaces`, the installation will be faster and take package duplication out of the way.

Then you can get some shortcuts:

1. `yarn` to replace `lerna bootstrap`.
1. `yarn workspace [scope] [script]` to replace `lerna exec --scope [scope] -- yarn [script]`.

## Set up workspaces

Users must enable Workspaces in Yarn by running the following command:

```
yarn config set workspaces-experimental true
```

The root `package.json` should be a `private` package and reponsible for enabling workspaces and some global 3rd development dependencies needed to the project build and test environment.

```json
{
  "private": true,
  "name": "jest",
  "devDependencies": {
    "chalk": "^2.0.1"
  },
  "workspaces": [
    "packages/*"
  ]
}
```

For more details, you can refer to [Workspaces in Yarn](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/)

## Release your monorepo

To publish your packages, just type:

```bash
lerna publish
```

It will show a prompt to tell you which version will be released and you can determine whether to continue. If you want to release a `explicit version`, you can keep a `version` behind the command intuitively.

```bash
lerna publish v1.0.0
```

> Note that [lerna publish](https://github.com/lerna/lerna/tree/master/commands/version#lernaversion) also support the flags of [yarn version](https://github.com/lerna/lerna/tree/master/commands/version#lernaversion).

## Release a alpha version

It's common to publish a alpha version before a major, if your current version is `0.15.0`, you can release a alpha version via:

```bash
lerna publish premajor --npm-tag next
```

> Note that you need take the `next` tag since all the npm release will be automatically tagged `latest`, once you forgot it, users will be able to install the alpha version via `yarn add xxx` instead of `yarn add xxx@next`.


If you don't use the [independent](https://github.com/lerna/lerna#independent-mode---independent) mode, it's recommended to take the `--force-publish` flag, it will force all packages to be versioned even if some packages didn't have a `git diff` change to be updated.

```bash
lerna publish premajor --force-publish --npm-tag next
```

## Bump your alpha version

Assuming your current version is `1.0.0-alpha.0`, you want to publish `1.0.0-alpha.1`, you'll need declare it explicitly:

```bash
lerna publish premajor 1.0.0-alpha.1 --force-publish --npm-tag next
```

## Some points

### Scoped packages

To publish scoped packages, you need to add the following to each `package.json`:

```json
  "publishConfig": {
    "access": "public"
  }
```

### Changelog

You can combine `--conventional-commits` flag with `--changelog-preset` to generate the semantic changelog:

```bash
lerna publish --conventional-commits --changelog-preset angular-bitbucket
```

### How to publish packages with their current version?

It's regrettable that for now lerna doesn't have a good support for publishing packages without changing versions. If you have executed `lerna version` in the past, the git tag has been updated but the packages haven't been published to the npm.

Refer to this [comment](https://github.com/lerna/lerna/issues/1056#issuecomment-344684810), for now you have a workaround:

```bash
lerna exec -- npm publish
```

But it wouldn't work when one or more of the packages are private, but `lerna publish` respects private packages.

At present, my suggestion is to avoid using `yarn version`, so as not to cause trouble. otherwise, if there is problem, you'll need to bump publish all packages one by one, hmm, that's so bad.

