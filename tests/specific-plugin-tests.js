const test = require("tape");

const myPluginInstance = require("../src")();

const result = myPluginInstance.run("tests/samples/*");

test("should load all files in samples",function(t){
  console.log(result);

  t.equal(result.length,2);

  t.end();

});

test("should read data from files",function(t){
  console.log(result);

  t.equal(result.length,2);

  t.end();

});