// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
// Get our API routes
const api = require('./server/routes/api');
var mongoOptions = { db: { safe: true }};
const app = express();
var dbUrl=process.env.MONGODB_URI || "mongodb://anshoo:anshoo@ds127864.mlab.com:27864/mydatabase";
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/mean-app/index.html'));
});
app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin","*"); // restrict it to the required domain
  res.header('Access-Control-Request-Method', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,application/octet-stream');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});
app.use('/api', api);
app.use(express.static('./server/assets'))
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);
mongoose.connect(dbUrl, mongoOptions, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + dbUrl + '. ' + err);
  } else {
    console.log ('Successfully connected to: ' + dbUrl);
  }
});
/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));