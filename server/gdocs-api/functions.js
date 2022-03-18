/** 
 * Contains basic CRUD operations to alter a google doc.
 */
const { google } = require('googleapis');

/**
 * THIS IS A SAMPLE FUNCTION
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
  const docs = google.docs({ version: 'v1', auth });

  // JSON request body, we insert variables for request params
  var myObject = {
    documentId: docID,
    "resource": {
      "requests": [{
        "insertText": {
          "text": text,
          "location": location,
        },
      }],
    },
    "writeControl": {}
  }

  // Send the JSON object in a batchUpdate request
  docs.documents.batchUpdate(myObject, function (err, res) {
    if (err) return console.log('The API returned an error: ' + err);
  });
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
      // console.log(res);
    }, function (err) {
      console.error(err);
    });
}

// Exporting functions
module.exports = { printDocInfo, insertText, getAllText, replaceAllTexts };