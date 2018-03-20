var builder = require("botbuilder")
var util = require("util");
const lib = new builder.Library("sharedMB");

lib.dialog("/",[
    function(session){
        const card = new builder.Message(session);
        card.attachmentLayout(builder.AttachmentLayout.carousel);
        card.attachments([
            new builder.HeroCard(session)
            .title("Shared Mailboxes")
            .subtitle("This is where all of the QNA stuff is")
            .text("Click here to go to the QnA page")
            .images([builder.CardImage.create(session, "https://s3.us-east-2.amazonaws.com/friend-finder333/question-mark.jpg")])
            .buttons([builder.CardAction.imBack(session, "HERRO", "Go to QNA")])
        ]);
        session.send(card)
    }
]);

module.exports.createLibrary = () =>{
    return lib.clone();
}