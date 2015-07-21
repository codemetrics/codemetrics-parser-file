"use strict";

const fs = require("fs");
const glob = require("glob");
const path = require("path");

const defaultOptions = {
    ignore: "node_modules/**"
};

module.exports = function(options = {}) {

    Object.assign(options,defaultOptions);

    return {
        run : (input) => {
            //TODO check input
            return glob.sync(input, options).map(processFile)
        }
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
