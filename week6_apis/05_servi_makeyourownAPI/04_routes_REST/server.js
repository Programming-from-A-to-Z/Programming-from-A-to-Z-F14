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

route('/thing/:name/:num', doThing);

function doThing(request) {
  // Query String
  var name = request.params['name'];
  var num = request.params['num'] || 1;
  var output = '';
  for (var i = 0; i < num; i++) {
    output += "Thanks for doing your thing, " + name + '<br/>';
  }
  request.respond(output);
}

start();

// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Thanks Sam Lavigne and Shawn Van Every
// https://github.com/antiboredom/servi.js/wiki

// Use servi
var servi = require('servi');
// Make an app
var app = new servi(true);
// Set the port
port(8080);

// This is basically just like 'python -m SimpleHTTPServer'
// We are just serving up a directory of files
serveFiles("public");

// Here's how we can write code to handle a specific 'route'
// http://myserver.com/thing/dan/10
// This is a fancy "REST"ian way of doing it
// Take a look back at the instragram API, it works like this!
route('/thing/:name/:num', doThing);

// Handle the route
function doThing(request) {
  // Get the parameters from the path
  var name = request.params['name'];
  var num = request.params['num'];

  // Generate some output
  var output = '';
  for (var i = 0; i < num; i++) {
    output += "Thanks for doing your thing, " + name + '<br/>';
  }
  // Respond
  request.respond(output);
}

// Start the server
start();


