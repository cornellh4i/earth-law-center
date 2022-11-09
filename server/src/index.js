'use strict';
const appName = "Server API";
const port = process.env.PORT || 8080;
const createServer = require("./server");
const fs = require('fs');
const path = require('path');
// const http = require('http');
const url = require('url');
const opn = require('open');
// const destroyer = require('server-destroy');
const { google } = require('googleapis');
const {authenticate, oauth2Client} = require('../gdocs-api/web-index');
google.options({ auth: oauth2Client });

const server = createServer((req, res) => {
  try {
    if (req.url.indexOf('/oauth2callback') > -1) {
      const qs = new url.URL(req.url, 'http://localhost:8080')
        .searchParams;
      const { tokens } =  oauth2Client.getToken(qs.get('code'));
      oauth2Client.credentials = tokens; // eslint-disable-line require-atomic-updates
      resolve(oauth2Client);
      res.end("Auth success"); 
    }
  } catch (e) {
    reject(e);
  }
}); 

server.listen(port, () => {});

// /**
//  * Open an http server to accept the oauth callback. In this simple example, the only request to our webserver is to /callback?code=<code>
//  */
// async function authenticate(scopes) {
//   return new Promise(async (resolve, reject) => {

//   });
// }

// module.exports = { authenticate };