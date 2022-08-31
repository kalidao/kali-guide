<img align="right" width="150" height="150" top="100" src="./src/.vuepress/public/wrappr-logo.png">

# wrappr-docs • ![License](https://img.shields.io/github/license/kalidao/wrappr-docs)

> [KALI](https://github.com/kalidao) Language Documentation built with [Vuepress](https://vuepress.vuejs.org/) and deployed at [wrappr.wtf](https://www.wrappr.wtf/).

## Usage

Build the vuepress site by running `pnpm build`.

To run the site locally, execute `pnpm dev`.

In [src/README.md](./src/README.md), the home page of the site is defined. Each subdirectory in [src](./src/) represents a page of the site.

**New Pages**

To add a new page, the page contents must be written in an [src](./src/) subdirectory. This will host the page at `https://www.wrappr.wtf/<page-name>` but will not create an item in the navbar. In order to add the new page to the navbar, an entry must be added to the Vuepress config file located in [src/.vuepress/config.js](./src/.vuepress/config.js).

Page and comprehensive site styles can be defined in [src/.vuepress/styles/](./src/.vuepress/styles/).