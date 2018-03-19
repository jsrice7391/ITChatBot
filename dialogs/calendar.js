var builder = require("botbuilder");
var util = require("util")
const lib = new builder.Library("calendar");


lib.dialog("/", [
    function(session) {
    builder.Prompts.text(session, "Hello... What's your name?");
  },
  function(session, results) {
    session.userData.name = results.response;
    builder.Prompts.number(
      session,
      "Hi " + results.response + ", How many years have you been coding?"
    );
  },
  function(session, results) {
    session.userData.coding = results.response;
    builder.Prompts.choice(session, "What language do you code Node using? ", [
      "JavaScript",
      "CoffeeScript",
      "TypeScript"
    ]);
  },
  function(session, results) {
    session.userData.language = results.response.entity;
    session.endDialog(
      "Got it... " +
        session.userData.name +
        " you've been programming for " +
        session.userData.coding +
        " years and use " +
        session.userData.language +
        "."
    );
  }
]);
module.exports.createLibrary = function(){
    return lib.clone();
}