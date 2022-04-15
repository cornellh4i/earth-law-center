const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
// The dotenv package allows us to use the .env file located in the gdocs-api folder.
const dotenv = require('dotenv');
const { run } = require('googleapis/build/src/apis/run');
// const functions = require('./functions.js');
dotenv.config();
console.log("ENV", process.env.CLIENT_ID)

const SCOPES = ['https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive'];

// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first time. 
const TOKEN_PATH = 'token.json';

/**
 * Creates a copy of a google doc
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth 2.0 client.
 * @param {docID} is the document id of the google doc we want to copy
 * @returns the docID of the copied document
 */
 async function docCopy(auth, docID){ 
  const drive = google.drive({ version: 'v2', auth });
  console.log("IN DOC COPY")
  //Copy file and store id in docCopyId
  var copyTitle = "Copy Title";
  var docCopyId;
  await drive.files.copy({
    fileId: docID,
    resource: {
      name: copyTitle,
    }
  }).then(function(response) {
    docCopyId = response.data.id
    console.log("copy of doc", docCopyId)
  },
  function(err) { console.error("Execute error", err); });
  return docCopyId
}

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
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Create an OAuth2 client with the given credentials, and then executes the
 * given callback function with the given docID as a parameter.
 * @param {callback} is the function that will be called.
 * @param {docID} is the docID that will be passed into the callback function.
 */
async function authorizeDocID(callback, docID) {

  const client_id = "454620567847-jsntbbqhlc4pvtda5cmfi18eqb4jff94.apps.googleusercontent.com";
  const client_secret = "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";
  const redirect_uris = ["http://localhost:8080/api/docCopy"];
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);
  // Check if we have previously stored a token.
  return new Promise((resolve) => {
    (fs.readFile(TOKEN_PATH, async (err, token) => {
      if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      await callback(oAuth2Client, docID).then((res) => {console.log("INDEX RESULT", res); resolve(res)})
    }))
  });
}

// authorizeDocID(docCopy, "1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os").then((res) => {console.log("FINAL RES", res)} )

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorizeReplaceAllTexts(callback, docId, replaceText, containsText) {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const redirect_uris = process.env.REDIRECT_URIS;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client, docId, replaceText, containsText);
  });
}

// authorizeReplaceAllTexts(functions.replaceAllTexts, "1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os", "Insomnia","Synesthesia");


/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorizeInsertText(callback, docID, text, location) {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const redirect_uris = ["http://localhost:8080"];
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);
  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, async (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    try {
      let result = callback(oAuth2Client, docID, text, location);
      // console.log("NewIDInAUTH", result)
      return result 
    } catch (e) {
      console.log(`The API returned an error: ` + e)
    }
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

// Exporting authorize functions
module.exports = { authorize, authorizeInsertText, authorizeReplaceAllTexts, authorizeDocID, docCopy};