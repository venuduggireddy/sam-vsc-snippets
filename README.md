# sam-vsc-snippets

[GSA sam components](https://www.npmjs.com/package/@gsa-sam/components) visual studio code snippets. This extension will provide IntelliSense for sam angular components for rapid development.

## Usage

Typing the beginning of `sam-` will automatically appear in the intellisense list; no more!

Alternatively, press `Ctrl`+`Space` (Windows, Linux) or `Cmd`+`Space` (macOS) to activate snippets from within the editor.

### HTML Snippets
All HTML snippets starts with `sam-component-`
 | Snippet | Purpose |
|--|--|
| `collapse` | create collapse component |
| `actions-menu` | create actions menu with options for `sm` and `lg` |
| `icon` | create icon tag  with options `bell,calendar,book`  |
| `header`| create header layout |
| `footer`| create footer layout |
| `subheader`| create subheader layout |
| `pagination`| create pagination layout |
| `filters`| create filters layout |
||

### Typescript
All typescript snippets starts with `sam-ts-`
 | Snippet | Purpose |
|--|--|
| `formly-input` | create formly config object with input type |
| `formly-accordion` | create formly config object with accordion type |
| `formly-options` | create formly config object with select input type |

### Quick start

```sh
$ git clone https://github.com/venuduggireddy/sam-vsc-snippets.git
$ cd sam-vsc-snippets
$ #install
$ npm i
$ # build
$ npm run build
$ # package vscode extension
$ npm run release
```