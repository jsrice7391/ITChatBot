var builder = require("botbuilder")
var util = require("util");
const lib = new builder.Library("sharedMB");

lib.dialog("/",[
    function(session){
        session.send("Shared Mailboxes are a great way to keep one email is sent and the team who has access to that shared mailbox can manage that one email.");
    }
]);

module.exports.createLibrary = () =>{
    return lib.clone();
}