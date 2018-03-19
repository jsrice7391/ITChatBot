var builder = require("botbuilder")
var util = require("util");
const lib = new builder.Library("ticket");


lib.dialog("/", [
    function(session, args){
        session.endDialog("Welcome to the create ticket dialog!");
    }
]);

module.exports.createLibrary = function() {
    return lib.clone();
}