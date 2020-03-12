#!/usr/bin/env bash

set -u -e -o pipefail

cd $(dirname $0)/..

buildSnippetByLang() {
  LANG="$1"
  (
    local filePrefix="-${LANG}"
    local i18nTpl=""
    # html
    $(npm bin)/vscode-snippet-generator --prefix=sam --i18n=${LANG} --sourceRoot=src/component --outFile=snippets/html${filePrefix}.json --i18nTpl=${i18nTpl}
    # ts
    $(npm bin)/vscode-snippet-generator --prefix=sam --i18n=${LANG} --sourceRoot=src/ts --outFile=snippets/ts${filePrefix}.json --i18nTpl=${i18nTpl}
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
    cp snippets/html${prefix}.json ./snippets-html.json
    cp snippets/ts${prefix}.json ./snippets-ts.json
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

   node ./scripts/table.js
}

buildSnippet
buildClass
packing
updateReadme
