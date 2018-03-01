// This loads the environment variables from the .env file
require('dotenv-extended').load();
var builder = require('botbuilder');
var restify = require('restify');
var cog = require("botbuilder-cognitiveservices");


// Setup Restify Server
var server = restify.createServer();
// The actual start of the server
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});
// Create connector and listen for messages
var connector = new builder.ChatConnector({
    // appId: process.env.MICROSOFT_APP_ID,
    // appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// The HTTP route that we can listen on for the servers incoming requests
server.post('/api/messages', connector.listen());

// We are establishing the Universal bot instance here. The bot will take an arguemnt of session.
var bot = new builder.UniversalBot(connector)


// Establish the LUIS connection through the API which is hiden
var recognizer = new builder.LuisRecognizer(process.env.LUIS_MODEL_URL);


// Make the recognizer For the QnA service to be used.
var qnaRecognizer = new cog.QnAMakerRecognizer({
    knowledgeBaseId: process.env.QAID,
    subscriptionKey: process.env.SUB_KEY
})



var intentsDialog = new builder.IntentDialog({ recognizers: [recognizer, qnaRecognizer] });
bot.dialog("/", intentsDialog)


intentsDialog.matches("qna", (session, args, next) => {
    var answerEntity = builder.EntityRecognizer.findEntity(args.entities, "answer");
    session.send(answerEntity.entity);

})



intentsDialog.onDefault([
  function(session){
    session.send("Sorry I do not see anything in the prebuilt")
  }

]);






  

