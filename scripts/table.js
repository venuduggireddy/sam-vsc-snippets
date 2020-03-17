const fs = require("fs");
const path = require("path");
const tablemark = require("tablemark");
const glob = require("glob");

const docs = path.join(__dirname, "../docs/");

glob(path.join(__dirname, "../snippets/") + "*.json", function(err, files) {
  if (err) throw err;

  files.forEach(function(file) {
    if (err) throw err;

    const fileName = path.parse(file).name;
    const jsonData = getJson(file);
    const tableMd = tablemark(getTableArray(jsonData));
    writeFile(docs+fileName+".md", tableMd);
  });
});


// const start = `
//   <!-- HTML_TABLE_START -->
//   ${htmlmd}
//   <!-- HTML_TABLE_END -->
// `;


function readFile(filename, data) {
  fs.readFile(filename, "utf8", function(err, data) {
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
