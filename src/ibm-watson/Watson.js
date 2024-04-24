// Example 1: Creates service object, sends initial message, and
// receives response.

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

// Create Assistant service object.
const assistant = new AssistantV2({
    version: '2021-11-27',
    authenticator: new IamAuthenticator({
        apikey: '{apikey}', // replace with API key
    }),
    url: '{url}', // replace with URL
});