// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Thanks Sam Lavigne and Shawn Van Every
// https://github.com/antiboredom/servi.js/wiki

// Use servi 
// npm install servi
var servi = require('servi');
// Make an app
var app = new servi(true);
// Set the port
port(8080);

// This is basically just like 'python -m SimpleHTTPServer'
// We are just serving up a directory of files
serveFiles("public");

// Here's how we can write code to handle a specific 'route'
// http://myserver.com/thing
route('/thing', doThing);

// This is the call back for what to do
// We can get stuff from the query String!
// http://myserver.com/thing?name=Dan
function doThing(request) {
  // Query String
  var name = request.params['name'];
  request.respond("Thanks for doing your thing, " + name);

  // This is also valid:
  // var name = request.params.name;

  // For a post it would be
  // var name = request.fields['name'];
}

// Start the server
start();


