"use strict";

var test = require("tape");
var myPlugin = require("../src");

test("the plugin module should expose a function",function(t){

  t.doesNotThrow(function(){
    var myPluginInstance = myPlugin();
  });

  t.end();

});

test("should have a 'run' public function", function (t) {

  var myPluginInstance = myPluginInstance = myPlugin();

  t.equal(typeof myPluginInstance.run,"function","run exist and it's a function");

  t.end();
});