"use strict";

var fs = require("fs");
var glob = require("glob");
var path = require("path");

var defaultOptions = {
    ignore: "node_modules/**"
};

module.exports = function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    Object.assign(options, defaultOptions);

    return {
        run: function run(input) {
            //TODO check input
            return glob.sync(input, options).map(processFile);
        }
    };
};

function processFile(fileName) {
    var filePath = path.resolve(fileName);
    return {
        name: fileName,
        path: filePath,
        data: fs.readFileSync(filePath).toString()
    };
}