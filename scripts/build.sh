#!/usr/bin/env bash

set -u -e -o pipefail

cd $(dirname $0)/..

buildSnippetByLang() {
  LANG="$1"
  (
    local filePrefix="-${LANG}"
    local i18nTpl=""
    # html
    $(npm bin)/vscode-snippet-generator --prefix=sam --i18n=${LANG} --sourceRoot=src/component --outFile=snippets/html.json --i18nTpl=${i18nTpl}
    # ts
    $(npm bin)/vscode-snippet-generator --prefix=sam --i18n=${LANG} --sourceRoot=src/ts --outFile=snippets/ts.json --i18nTpl=${i18nTpl}
    #scss
    $(npm bin)/vscode-snippet-generator --prefix=sam --i18n=${LANG} --sourceRoot=src/scss --outFile=snippets/scss.json --i18nTpl=${i18nTpl}
  )
}

buildSnippet() {
  echo "Build snippets..."
  rm -rf ./snippets
  mkdir -p ./snippets

  buildSnippetByLang "en-US"
}

buildClass() {
  echo "Build class names..."
  $(npm bin)/tsc -p ./
}

packingByLang() {
  LANG="$1"
  (
    local prefix="-${LANG}"
    echo "Packing version: ${LANG}"
    cp snippets/html.json ./snippets-html.json
    cp snippets/ts.json ./snippets-ts.json
    cp snippets/scss.json ./snippets-scss.json
    $(npm bin)/vsce package -o sam-vsc-snippets.vsix
  )
}

packing() {
  packingByLang "en-US"
}

updateReadme(){
   echo "Generate docs..."
   rm -rf ./docs
   mkdir -p ./docs
   npx ./scripts/table.js
   npx embedme README.md
}

buildSnippet
buildClass
updateReadme
packing

