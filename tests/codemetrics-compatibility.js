const test = require("tape");
import myPlugin from"../src";

test("the plugin module should expose a function",function(t){

  t.doesNotThrow(function(){
    myPlugin();
  });

  t.end();

});

test("should have a 'run' public function", function (t) {

  const myPluginInstance = myPlugin();

  t.equal(typeof myPluginInstance.run,"function","run exist and it's a function");

  t.end();
});