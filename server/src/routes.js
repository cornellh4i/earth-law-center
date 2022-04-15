module.exports = () => {


  const express = require("express");
  const router = express.Router();

  // Imported functions
  const functions = require('../gdocs-api/functions.js');
  const index = require('../gdocs-api/index.js');
  // const dotenv = require('dotenv');
  // // dotenv.config({ path: '../gdocs-api/.env' });
  // const path = require('path')
  // require('dotenv').config({ path: path.resolve(__dirname, '../gdocs-api/.env') })


  /**** Below are Example Routes from the starter code ****/
  router.get('/hello', async (req, res) => {
    res.json({ msg: "Hello, world!" });
  });

  router.get('/hello/:name', async (req, res) => {
    res.json({ msg: `Hello, ${req.params.name}` });
  });

  // Endpoint for docCopy -- TODO
  router.get('/docCopy/:docID', async (req, res) => {
    console.log("REQUEST", req.params)
    try {
      const docID = await index.authorizeDocID(index.docCopy, req.params.docID).then((response) => {
      console.log("RES", response)
      return response;
    });
    res.json({ msg: `docid: ${docID}`});
  }
  catch(err){
    res.json({error:err.message || err.toString()})
  }
  });


  // index.authorizeDocID(index.docCopy, "1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os").then((res) => {console.log("FINAL RES", res)} )
  // index.authorizeInsertText(functions.insertText, "1w3YFbfJ4y5Fz7ea0_5YTgxE9zoA3qvOnlKoRFmKw3Os", "This text is up!", { index: 1 });
  // Endpoint for insertText()
  router.get('/insertText/:docID/:text/:location', async (req, res) => {
    // const docID = index.authorizeInsertText(req.params.docID, req.params.text, { index: req.params.location});
    res.json({ msg: `docid: ${docID}, text: ${req.params.text}, location: ${req.params.location}` });
  });



  // Endpoint for replaceAllText() -- TODO
  router.get('/replaceAllText/:foodleast/:foodfav', async (req, res) => {
    // res.json({ msg: `My favorite food is, ${req.params.foodfav}` });
  });

  return router;
}
