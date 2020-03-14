# sam-vsc-snippets

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/venuduggireddy/sam-vsc-snippets/CI)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/venuduggireddy/sam-vsc-snippets)
![GitHub repo size](https://img.shields.io/github/repo-size/venuduggireddy/sam-vsc-snippets)
![GitHub](https://img.shields.io/github/license/venuduggireddy/sam-vsc-snippets)

[GSA sam components](https://www.npmjs.com/package/@gsa-sam/components) visual studio code snippets. This extension will provide IntelliSense for sam angular components for rapid development.

## Usage

Typing the beginning of `sam-` will automatically appear in the intellisense list; no more!

Alternatively, press `Ctrl`+`Space` (Windows, Linux) or `Cmd`+`Space` (macOS) to activate snippets from within the editor.

### HTML Snippets
All HTML snippets starts with `sam-`

This table is generated druing build

```md
<!-- docs/html.md -->

| Prefix           | Description                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| sam-actions-menu | Create actions menu with options for size `default` or `sm`. Default size is sm.                                 |
| sam-button       | Button with circular icons                                                                                       |
| sam-collapse     | Collapse component with show hide content                                                                        |
| sam-filters      | Sds Formly filters                                                                                               |
| sam-header       | Header layout component                                                                                          |
| sam-icon         | icon tag  with options for `bell,calendar,book`                                                                  |
| sam-pagination   | Pagination with top and bottom options                                                                           |
| sam-subheader    | Subheader with all otions backbutton, title, primary/secondry buttons, search, action buttons and drawer content |

```

### Typescript
All typescript snippets starts with `sam-`

This table is generated druing build

```md
<!-- docs/ts.md -->

| Prefix           | Description           |
| ---------------- | --------------------- |
| sam-action-menu  | Action items menu     |
| sam-formly-input | SF                    |
| sam-page         | Pagination page model |

```
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
