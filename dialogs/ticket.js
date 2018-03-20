var builder = require("botbuilder")
var util = require("util");
const lib = new builder.Library("ticket");

lib.dialog("Weston", [
    function(session){
        session.send("Weston is cool")
    }
])

lib.dialog("/", [
    function(session){
        session.send("You want to build a ticket!")
        builder.Prompts.text(session, "What building are you in?")
    },
    function(session, results){
        session.dialogData.location = results.response.toLowerCase();
        if (session.dialogData.location.includes("weston")){
            session.beginDialog("Weston")
        }else{
        session.send(`Sounds good. We will make sure we creata ticket for ${session.dialogData.location}.`);
        }
    }
]);

module.exports.createLibrary = function() {
    return lib.clone();
}