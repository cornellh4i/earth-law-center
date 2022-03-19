const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
// The dotenv package allows us to use the .env file located in the gdocs-api folder.
const dotenv = require('dotenv');
const { run } = require('googleapis/build/src/apis/run');
dotenv.config();

const SCOPES = ['https://www.googleapis.com/auth/documents.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first time. 
const TOKEN_PATH = 'token.json';

// This calls the function inside of the authorize function. 
// authorize(printDocInfo);
 authorizeGetAllText(getAllText, '1OZrCP-jvxxlZim6uInLzR0UjPxmJnLcl88oDToTHmmw');

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

function authorizeGetAllText(callback, docID) {
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
    callback(oAuth2Client, docID);
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
    documentId: '1OZrCP-jvxxlZim6uInLzR0UjPxmJnLcl88oDToTHmmw',
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
  const docs = google.docs({ version: 'v1', auth });
  // We are using a GET request here
  docs.documents.get({
    // This document ID is found in the url after the /d
    documentId: docID,
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    // Adds title of doc to JSON 
    var allText = {
      "title" : res.data.title
    }
    // Creates an attribute for each text run in the doc
    allText["textRun0"] = readStructuralElements(res.data.body.content[0]);
    for (i = 1; i < res.data.body.content.length; i++) {
      allText["textRun" + i] = readStructuralElements(res.data.body.content[i], allText["textRun" + (i-1)]);
    }
    console.log(allText);
    return allText;
  });
}


function readStructuralElements(element, prevTextRun) {
  // code sourced and modified from Google Docs API documentation
  var textRun = {
    "text" : "",
    // Stores data on font style
    "style" : {
      "bold" : false,
      "italic" : false,
      "underline" : false,
    },
    // Stores data on list style
    "listStyle" : {
      "isList" : false,
      "nestingLevel" : 0,
      "numberInList" : 0
    }
  }
  if (element.paragraph != null) {
    // Parses text within paragraph structural element
    paragraphElements = element.paragraph.elements;
    for (j = 0; j < paragraphElements.length; j++) {
      // Parses text, style, and list style of paragraph element
      textRun.text += readParagraphElement(paragraphElements[j]);
      textRun.style = readParagraphElementStyle(paragraphElements[j]);
      textRun.listStyle = readParagraphElementListStyle(element.paragraph.bullet, prevTextRun.listStyle);
    }
  } else if (element.table != null) {
    // The text in table cells are in nested Structural Elements and tables may be
    // nested.
    rows = element.table.getTableRows();
    // Parses rows and columns of table
    for (j = 0; j < rows.length(); j++) {
      cells = rows[j].getTableCells();
      for (k = 0; k < cells.length(); k++) {
        textRun.text += readStructuralElements(cells[k].getContent());
      }
    }
  } else if (element.tableOfContents != null) {
    // The text in the TOC is also in a Structural Element.
    textRun.text += readStructuralElements(element.getTableOfContents().getContent());
  }  
  return textRun;
}

function readParagraphElement(element) {
  // Helper for parsing paragraph element
  textRun = element.textRun;
  if (textRun == null || textRun.content == null) {
    // The TextRun can be null if there is an inline object.\
    return "";
  }
  return textRun.content;
}

function readParagraphElementStyle(element) {
  // Helper for parsing paragraph font style
  var style = {
    "bold" : false,
    "italic" : false,
    "underline" : false,
  }
  // Fixes issue of style attributes being undefined
  // One issue to address: code does not work for varying styles
  // within a text run 
  style.bold = element.textRun.textStyle.bold == true;
  style.italic = element.textRun.textStyle.italic == true;
  style.underline = element.textRun.textStyle.underline == true;
  return style;
}

function readParagraphElementListStyle(bullet, prevListStyle) {
  // Helper for parsing paragraph list style
  var listStyle = {
    "isList" : false,
    "nestingLevel" : 0,
    "numberInList" : 0
  }
  listStyle.isList = bullet != null;
  listStyle.numberInList = + (bullet != null);
  // increments the nesting level within the listStyle JSON 
  // to match the bullet's nesting level
  if (bullet != null && bullet.nestingLevel != null){
    listStyle.nestingLevel = bullet.nestingLevel;
  }
  // Google Docs API does not differentiate between ordered and unordered
  // lists, so we created our own numbering system below
  if (prevListStyle.isList){
    listStyle.numberInList = prevListStyle.numberInList + 1;
    console.log(prevListStyle)
  }
  return listStyle;
}

/**
 * Replaces all instances of containsText with replaceText in document specified by docID
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth 2.0 client.
 * @param docID is the document id of the google doc we want to insert data in
 * @param replaceText is the text that will replace the matched text.
 * @param containsText is the text in the document matching this substring that will be replaced by replaceText.
 * 
 */
 function replaceText(auth, docID, replaceText, containsText) {
  
}