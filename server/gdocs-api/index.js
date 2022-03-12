const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
// The dotenv package allows us to use the .env file located in the gdocs-api folder.
const dotenv = require('dotenv');
dotenv.config();

const SCOPES = ['https://www.googleapis.com/auth/documents'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first time. 
const TOKEN_PATH = 'token.json';

// This calls the function inside of the authorize function. 
// authorize(printDocInfo);

// Run and test the replaceAllTexts function
// param to change 
const docId = "1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os"
const empty_docid = "1PLm7mpUY-V5fJI54R-M6uxfWpY3yFCRd25K9DBJQDRg"
// 1. find every occurence of culture and replace them with elc and replace them
// back with another call
authorizeReplaceAllTexts(replaceAllTexts, docId, "ELC!!!!!!!", "culture");
// add a get all document contents function call to check if change is occurred
authorizeReplaceAllTexts(replaceAllTexts, docId, "culture", "ELC!!!!!!!");

// 2. replace a piece of text not occurring in the document 
// should have no effect
authorizeReplaceAllTexts(replaceAllTexts, docId, "NOEFFECT!!!", "abc");

// 3. replace a nonzero length of text in an empty document should have no 
// effect
authorizeReplaceAllTexts(replaceAllTexts, empty_docid, "NOEFFECT!!!", "abc");

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(callback) {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const redirect_uris = process.env.REDIRECT_URIS;
  // const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

function authorizeReplaceAllTexts(callback, docId, replaceText, containsText) {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const redirect_uris = process.env.REDIRECT_URIS;
  // const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client, docId, replaceText, containsText);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Prints some information from a sample doc: 
 * https://docs.google.com/document/d/1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth 2.0 client.
 */
function printDocInfo(auth) {
  const docs = google.docs({ version: 'v1', auth });
  // We are using a GET request here
  docs.documents.get({
    // This document ID is found in the url after the /d
    documentId: '1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    // Below we are getting the length all of the content in the code 
    var len_contents = res.data.body.content.length;
    // Each value in the list called "content" is a line of the text"
    // If the line of text is tabbed, one textRun will get everything that is tabbed
    var someText = res.data.body.content[4].paragraph.elements[0].textRun.content;
    console.log(`The length of the document is: ${len_contents}`);
    console.log(`The text of the document is: ${someText}`);
  });
}

/**
 * Inserts text at a location in a google doc
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth 2.0 client.
 * @param docID is the document id of the google doc we want to insert data in
 * @param text is the text to be inserted into the document with id docID
 * @param location is the location in the document we want to insert the data at
 * 
 */
function insertText(auth, docID, text, location) {

}

/**
 * Get data from a google doc and return
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth 2.0 client.
 * @param docID is the document id of the google doc we want get data from 
 */
function getAllText(auth, docID) {

}

/**
 * Replaces all instances of containsText with replaceText in document specified by docID
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth 2.0 client.
 * @param docID is the document id of the google doc we want to insert data in
 * @param replaceText is the text that will replace the matched text.
 * @param containsText is the text in the document matching this substring that will be replaced by replaceText.
 * 
 */
function replaceAllTexts(auth, docID, replaceText, containsText) {
  // get all the documents of the associated authorized user
  const docs = google.docs({ version: 'v1', auth });
  // pass in the document ID to specify a document to change and put a key of 
  // replaceAllText representing type of request and its value which is a 
  // dictionary(json) that contains the the text to substitute in(replaceText) 
  // and the text to substitute for(containsText) 
  // string match ignoring uppercase and lowercase (matchCase false)
  var updateObject = {
    "documentId": docID,
    "resource": {
      "requests": [{
        "replaceAllText":
        {
          "replaceText": replaceText,
          "containsText": {
            "text": containsText,
            "matchCase": false
          }
        }
      }],
    },
  };
  // make the google doc api call passing in the update request object
  docs.documents.batchUpdate(updateObject)
    .then(function (res) {
      console.log(res);
    }, function (err) {
      console.error(err);
    });
}

