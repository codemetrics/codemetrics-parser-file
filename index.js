"use strict";

const fs = require("fs");
const glob = require("glob");
const path = require("path");

const defaultOptions = {
    ignore: "node_modules/**"
};

module.exports = function(options) {

    console.log("File Input Parser loaded ", sources);

    Object.assign(options,defaultOptions);

    this.run = function(input){
    //TODO check input
      return glob.sync(sources, options).map(processFile)
    }
}



function processFile(fileName) {
    var filePath = path.resolve(fileName);
    return {
        name: fileName,
        path: filePath,
        data: fs.readFileSync(filePath).toString()
    };

}
