var builder = require("botbuilder");
var util = require("util")
const lib = new builder.Library("calendar");


lib.dialog("/", [
  function(sesssion){
    session.send("Welcome to the calendar Dialog")
  }
]);

   

module.exports.createLibrary = function(){
    return lib.clone();
}