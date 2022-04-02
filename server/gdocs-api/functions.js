/** 
 * Contains basic CRUD operations to alter a google doc.
 */
const { google } = require('googleapis');
const index = require('../gdocs-api/index.js');

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
 * @param {docID} is the document id of the google doc we want to insert data in
 * @param {text} is the text to be inserted into the document with id docID
 * @param {location} is the location in the document we want to insert the data at
 * @returns the docID of the copied document with the new changes 
 */
 function insertText(auth, docID, text, location) {
  //Authorize docs and drive
  const docs = google.docs({ version: 'v1', auth });
  // const drive = google.drive({ version: 'v2', auth });
  //Copy file and store id in docCopyId
  // var copyTitle = "Copy Title";
  var docCopyId;
  // drive.files.copy({
  //   fileId: docID,
  //   resource: {
  //     name: copyTitle,
  //   }
  // }, (err, res) => {
  //   docCopyId = res.data.id;
    // JSON request body for batchupdate with docCopyId
    index.authorizeDocID("1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os").then(
      (res) => {docCopyId = res}); 
    var updateObject = {
      documentId: docCopyId,
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
    docs.documents.batchUpdate(updateObject, (err, res) => {
      if (err) {
        return console.log(`The API returned an error: ` + err)
      } else {
        // console.log(`The copied file for insertion is accessible at ` + docCopyId);
        return docCopyId;
      } 
    });
  // });
}

/**
 * Get data from a google doc 
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth 2.0 client.
 * @param {docID} is the document id of the google doc we want get data from 
 * @returns all the data from a google doc in the form of a json object 
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
    // Testing: console.log(allText);
    return allText;
  });
}

/**
 * Helper function to initialize textRun JSON, determines what type of structural element is being parsed, and stores
 * respective data (list style, text, and font style for paragraph elements; rows and columns of a table;
 * total content of a table of contents) into the respective textRun's JSON.
 * @param {element} is the text run of the Google Doc being parsed
 * @param {prevTextRun} is the previous text run before the one being parsed
 * @returns the textRun JSON 
 */
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

/**
 * Helper function to parse a paragraph element; extracts the text content of a text run within a paragraph element.
 * @param element is the text run of the Google Doc being parsed, specifically a text run of the paragraph
 * element being parsed.
 * @returns the content of the text run within a paragraph element.
 */
function readParagraphElement(element) {
  // Helper for parsing paragraph element
  textRun = element.textRun;
  if (textRun == null || textRun.content == null) {
    // The TextRun can be null if there is an inline object.\
    return "";
  }
  return textRun.content;
}

/**
 * Helper function to parse a paragraph element; extracts the font styling of a text run within a paragraph element.
 * @param element is the text run of the Google Doc being parsed, specifically a text run of the paragraph
 * @returns assigned values to the font styling attributes of the textRun's JSON.
 */
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

/**
 * Helper function to parse a paragraph element; extracts the list styling of a text run within a paragraph element.
 * @param element is the text run of the Google Doc being parsed, specifically a text run of the paragraph
 * @param prevListStyle is the styling of the previous list within the paragraph element
 * @returns assigned values to the list styling attributes of the textRun's JSON.
 */
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
    // Testing: console.log(prevListStyle)
  }
  return listStyle;
}

/**
 * Replaces all instances of containsText with replaceText in document specified by docID
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth 2.0 client.
 * @param {docID} is the document id of the google doc we want to insert data in
 * @param {replaceText} is the text that will replace the matched text.
 * @param {containsText} is the text in the document matching this substring that will be replaced by replaceText.
 * @returns the docID of the copied document with the new changes 
 */
function replaceAllTexts(auth, docID, replaceText, containsText) {
  //Authorize docs and drive
  const docs = google.docs({ version: 'v1', auth });
  const drive = google.drive({ version: 'v2', auth });
  //Copy file and store id in docCopyId
  var copyTitle = "Copy Title";
  var docCopyId;
  drive.files.copy({
    fileId: docID,
    resource: {
      name: copyTitle,
    }
  }, (err, res) => {
    docCopyId = res.data.id;
    // JSON request body for batchupdate with docCopyId
    var updateObject = {
      "documentId": docCopyId,
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
    // Send the JSON object in a batchUpdate request
    docs.documents.batchUpdate(updateObject, (err, res) => {
      if (err) {
        return console.log(`The API returned an error: ` + err)
      } else {
        // console.log(`The copied file for replacement is accessible at ` + docCopyId);
        return docCopyId;
      } 
    });
  });
}

// Exporting functions
module.exports = { printDocInfo, insertText, getAllText, replaceAllTexts};