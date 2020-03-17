const fs = require("fs");
const path = require("path");
const tablemark = require("tablemark");

const html = getJson(path.join(__dirname, "../snippets/html.json"));
const ts = getJson(path.join(__dirname, "../snippets/ts.json"));
const scss = getJson(path.join(__dirname, "../snippets/scss.json"));

const docs = path.join(__dirname, "../docs/");

const htmlmd = tablemark(getTableArray(html));
const tsmd = tablemark(getTableArray(ts));
const scssmd = tablemark(getTableArray(scss));
const start= `
  <!-- HTML_TABLE_START -->
  ${htmlmd}
  <!-- HTML_TABLE_END -->
`

writeFile(docs + "html.md", htmlmd);
writeFile(docs + "ts.md", tsmd);
writeFile(docs + "scss.md", scssmd);


function readFile(filename, data){
   fs.readFile(filename, 'utf8', function (err,data){
    if (err) {
      return console.log(err);
    }
   });
}
/**
 * generate markdown table file for each snippet type
 * @param {*} file 
 * @param {*} data 
 */
function writeFile(file, data) {
  fs.writeFile(file, data, function(err) {
    if (err) throw err;
    // console.log("Saved!" + file);
  });
}

/**
 * Read file from the path and covert it to JSON object
 * @param {*} filePath 
 */
function getJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath).toString("utf8"));
}

/**
 * Reduce prefix and description to array
 * @param {*} snippet 
 */
function getTableArray(snippet) {
  return Object.keys(snippet).reduce((acc, key) => {
    const h = snippet[key];
    acc.push({
      prefix: h["prefix"],
      description: h["description"]
    });
    return acc;
  }, []);
}
