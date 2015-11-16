import fs from "fs";
import glob from "glob";
import path from "path";

const defaultOptions = {
  ignore: "node_modules/**"
};

module.exports = function(options = {}) {

  Object.assign(options,defaultOptions);

  return {
    run : function(input) {
      //TODO check input
      return glob.sync(input, options).map(processFile);
    }
  };
};



function processFile(fileName) {
  const filePath = path.resolve(fileName);
  return {
    name: fileName,
    path: filePath,
    data: fs.readFileSync(filePath).toString()
  };

}
