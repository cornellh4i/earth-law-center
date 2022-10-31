module.exports = () => {
  const express = require("express");
  const router = express.Router();
  const path = require("path");
  const fs = require('fs').promises;

  // Imported functions
  const functions = require('../gdocs-api/functions.js');
  const authsamp = require('../gdocs-api/web-index.js')

  const scopes = ['https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/spreadsheets.readonly'];

  /**** Below are Example Routes from the starter code *****/
  router.get('/hello', async (_, res) => {
    res.json({ msg: "Hello, world!" });
  });

  router.get('/hello/:name', async (req, res) => {
    res.json({ msg: `Hello, ${req.params.name}` });
  });
  /*********************************************************/

  // Endpoint for getting questions from Google Sheets
  router.get('/getQuestions/:sheetID/:docID', async (req, res) => {
    try {
      functions.readAuthFile(scopes).then((client) => {
        functions.getQuestions(client, req.params.sheetID, req.params.docID)
          .then(async function (response) {
            res.json(response)
          })
      })
    } catch (err) {
      res.json({ error: err.message || err.toString() })
    }
  })

  // Endpoint for docDownload
  router.get('/docDownload/:docID', async (req, res) => {
    try {
      (async function () {
        let fileLocation = './docs'
        let filePath = path.join(fileLocation, `${req.params.docID}.docx`) // path on server
        let client = await functions.readAuthFile()

        // Update title and encode to remove problematic characters
        let response = await functions.getAllText(client, req.params.docID)
        let fileName = await encodeURIComponent(`${response.title}.docx`)

        // Write binary data to a file stored on the server
        response = await functions.docDownload(client, req.params.docID)
        await fs.writeFile(filePath, Buffer.from(response), function (err) {
          if (err) throw err;
        })

        // Download to user's desktop and delete server file
        res.download(filePath, fileName, function () {
          fs.unlink(filePath);
        })
      })()
    }
    catch (err) {
      res.json({ error: err.message || err.toString() })
    }
  });

  // Endpoint for docCopy 
  router.get('/docCopy/:docID', async (req, res) => {
    try {
      functions.readAuthFile().then((client) => functions.docCopy(client, req.params.docID).then((response) => res.json({ msg: `docid: ${response}` })))
    }
    catch (err) {
      res.json({ error: err.message || err.toString() })
    }
  });

  // Endpoint for insertText
  router.get('/insertText/:docID/:text/:location', async (req, res) => {
    try {
      functions.readAuthFile(scopes).then((client) => functions.insertText(client, req.params.docID, req.params.text, { index: req.params.location }).then((response) => res.json({ msg: `docid: ${response}` })))
    }
    catch (err) {
      res.json({ error: err.message || err.toString() })
    }
  });

  // Endpoint for replaceAllText
  router.get('/replaceAllText/:docID/:replaceText/:containsText', async (req, res) => {
    try {
      functions.readAuthFile(scopes).then((client) => functions.replaceAllTexts(client, req.params.docID, req.params.replaceText, req.params.containsText).then((response) => res.json({ msg: `docid: ${response}` })))
    }
    catch (err) {
      res.json({ error: err.message || err.toString() })
    }
  });

  // Endpoint for preAuthenticate
  router.get('/preAuthenticate', async (req, res) => {
    try {
      authsamp.authenticate(scopes).then((client) => functions.preAuthenticate(client).then((response) => res.json({ msg: `token: ${response}` })))
    }
    catch (err) {
      res.json({ error: err.message || err.toString() })
    }
  });

  // Endpoint for getAllText (currently does not work (returns an object))
  router.get('/getAllText/:docID', async (req, res) => {
    try {
      functions.readAuthFile(scopes).then((client) => functions.getAllText(client, req.params.docID).then((response) => res.json({ msg: `text: ${JSON.stringify(response)}` })))
    }
    catch (err) {
      res.json({ error: err.message || err.toString() })
    }
  });

  return router;
}
