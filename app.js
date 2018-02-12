// This loads the environment variables from the .env file
require('dotenv-extended').load();

var builder = require('botbuilder');
var restify = require('restify');


// Setup Restify Server
var server = restify.createServer();
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

var bot = new builder.UniversalBot(connector, function (session) {
    session.send('Sorry, I did not understand \'%s\'. Type \'help\' if you need assistance.', session.message.text);
});

// You can provide your own model by specifing the 'LUIS_MODEL_URL' environment variable
// This Url can be obtained by uploading or creating your model from the LUIS portal: https://www.luis.ai/
var recognizer = new builder.LuisRecognizer(process.env.LUIS_MODEL_URL);
bot.recognizer(recognizer);


// These are the following dialogs. The first argument is the name of the intent that LUIS will match, the callback is what 
// Luis will do afote he has it completed
bot.dialog("Greeting", function(session) {
    session.send("Hello! Welcome to the biogen chat bot!") 
  })
  .triggerAction({
    matches: "Greeting"
  })

// This is for the Create Ticket
bot.dialog("CreateTicket", function(session) {
    session.send("So you want to create a ticket?");
  })
  .triggerAction({
    matches: "CreateTicket"
  });

// This is for the Outlook inbox
bot.dialog("Calendar", function(session) {
    session.send("Managing time is important. Whast kind Of calendar issue ars you having?");
  })
  .triggerAction({
    matches: "Calendar"
  });
  

  // This is for the Create Ticket
bot.dialog("DistributionList", function(session) {
    session.send("That seems Like somthing we can take care of!");
  })
  .triggerAction({
    matches: "DistirbutionList"
  });
  

  // This is for the Create Ticket
bot.dialog("Groups", function(session) {
    session.send("Groups are a great way to...");
  })
  .triggerAction({
    matches: "Groups"
  });
  
  // This is for the Create Ticket
bot.dialog("OneDrive", function(session) {
    session.send("One Drive is a great platform. Lets Get started");
  })
  .triggerAction({
    matches: "OneDrive"
  });
  

  // This is for the Create Ticket
bot.dialog("Outlook", function(session) {
    session.send("An Outlook question? Sounds good!");
  })
  .triggerAction({
    matches: "Outlook"
  });
  

  // This is for the Create Ticket
bot.dialog("SharedMailbox", function(session) {
    session.send("What Kind of Shasred mailbox?");
  })
  .triggerAction({
    matches: "SharedMailbox"
  });
  

  // This is for the Create Ticket
bot.dialog("VideoStreams", function(session) {
    session.send("A video strem!?!?");
  })
  .triggerAction({
    matches: "VideoStreams"
  });
  







    




  

