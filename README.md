# Readme

Built using [Vuepress](https://vuepress.vuejs.org/)

## Setup:

Pre-requisites: nodejs and yarn.

* Clone the repository
* `cd` into the directory `cd komodo-docs-vuepress/`

Install Vuepress globally

```shell
yarn global add vuepress
```

Or install as a local dependency

```shell
yarn add -D vuepress
```
## Start Editing

```shell
yarn docs:dev
```

HTML output is displayed at http://localhost:8080

>Edit the markdown files in the directory `docs`

If the changes are not reflected right away, refresh the page.

## Build

```shell
yarn docs:build
```

The html files are available in `komodo-docs-vuepress/docs/.vuepress/dist/`

## Deploy

To deploy to gh-pages at `https://<USERNAME>.github.io/<REPO>`

```shell
./deploy.sh
```

