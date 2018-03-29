## Introduction
Problem: When there are large companies with large IT departments, there becomes the need for the emplyoees to reach the proper people in the IT department who can get the problems solved fast. ITChatBot aims to use LUIS-AI to find the users intention and then direct them in the right direction and then use ServiceNow's API to create the documentation to the correct department.

## Technologies used
LuisAI: https://www.luis.ai/
ServiceNow API: https://developer.servicenow.com/app.do#!/rest_api_doc?v=jakarta&id=c_TableAPI
Bot Emulator: https://docs.microsoft.com/en-us/azure/bot-service/bot-service-debug-emulator

## Use Azure app service editor

1. make code change in the online editor

Your code changes go live as the code changes are saved.

## Use Visual Studio Code

### Build and debug
1. download source code zip and extract source in local folder
2. open the source folder in  Visual Studio Code
3. make code changes
4. download and run [botframework-emulator](https://emulator.botframework.com/)
5. connect the emulator to http://localhost:3987

### Publish back

```
npm run azure-publish
```

## Use continuous integration

If you have setup continuous integration, then your bot will automatically deployed when new changes are pushed to the source repository.



