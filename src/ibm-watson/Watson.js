// Example 1: Creates service object, sends initial message, and
// receives response.
require('dotenv').config(); 
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
const assistantId = process.env.DRAFT_ENVIROMENT_ID; // get Assistant ID from .env file

// Create Assistant service object.
const assistant = new AssistantV2({
    version: '2021-11-27',
    authenticator: new IamAuthenticator({
        apikey: process.env.API_KEY, // get API key from .env file
    }),
    url: process.env.URL_WATSONX, // replace with URL
});

// Send initial message to Assistant service.
assistant.messageStateless({
    assistantId,
    input: "hola"
})