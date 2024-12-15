// Create web server
// Create a new web server using Express.js
var express = require('express');
var app = express();
// Set up a static file server that points to the "client" directory
app.use(express.static('client'));
// Start the server on port 3000
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});