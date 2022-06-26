module.exports = () => {
  const express = require("express");
  const router = express.Router();

  // Imported functions
  const functions = require('../gdocs-api/functions.js');
  const authsamp = require('../gdocs-api/web_index.js')
  const scopes = ['https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive'];

  /**** Below are Example Routes from the starter code *****/
  router.get('/hello', async (res) => {
    res.json({ msg: "Hello, world!" });
  });

  router.get('/hello/:name', async (req, res) => {
    res.json({ msg: `Hello, ${req.params.name}` });
  });
  /*********************************************************/

  // Endpoint for docDownload
  router.get('/docDownload/:docID', async (req, res) => {
    try {
      authsamp.authenticate(scopes)
        .then((client) => functions.docDownload(client, req.params.docID))
        .then((response) => res.download(response))
    }
    catch (err) {
      res.json({ error: err.message || err.toString() })
    }
  });

  // Endpoint for docCopy 
  router.get('/docCopy/:docID', async (req, res) => {
    try {
      authsamp.authenticate(scopes).then((client) => functions.docCopy(client, req.params.docID).then((response) => res.json({ msg: `docid: ${response}`})))
    }
    catch(err){
      res.json({error:err.message || err.toString()})
    }
  });

  // Endpoint for insertText
  router.get('/insertText/:docID/:text/:location', async (req, res) => {
    try {
      authsamp.authenticate(scopes).then((client) => functions.insertText(client, req.params.docID, req.params.text, { index: req.params.location}).then((response) => res.json({ msg: `docid: ${response}`})))
    }
    catch(err){
      res.json({error:err.message || err.toString()})
    }
  });

  // Endpoint for replaceAllText() -- TODO
  router.get('/replaceAllText/:docID/:replaceText/:containsText', async (req, res) => {
    try {
      authsamp.authenticate(scopes).then((client) => functions.replaceAllTexts(client, req.params.docID, req.params.replaceText, req.params.containsText).then((response) => res.json({ msg: `docid: ${response}`})))
    }
    catch(err){
      res.json({error:err.message || err.toString()})
    }
  });


  // Endpoint for getAllText (currently does not work (returns an object))
  router.get('/getAllText/:docID', async (req, res) => {
    try {
      authsamp.authenticate(scopes).then((client) => functions.getAllText(client, req.params.docID).then((response) => res.json({ msg: `text: ${response}`})))
    }
    catch(err){
      res.json({error:err.message || err.toString()})
    }
  });

  return router;
}
