// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Thanks Sam Lavigne and Shawn Van Every
// https://github.com/antiboredom/servi.js/wiki

// Now let's store data in a database!!

// Use servi
var servi = require('servi');
// Make an app
var app = new servi(true);
// Set the port
port(8080);

// This is basically just like 'python -m SimpleHTTPServer'
// We are just serving up a directory of files
serveFiles("public");

// Now we are making a database
// This uses https://github.com/louischatriot/nedb behind the scenes
// It basically saves your data like JSON
var names = useDatabase("namesdb");

// A route for saving data
route('/save', saveData);

// A route for serving up the data
route('/json', jsonAPI);

// Let's save the data
function saveData(request) {
  // Make an object with a name and number
  // from the query string
  var data = {
    name: request.params['name'],
    num: request.params['num']
  };
  
  // Add to database
  names.add(data);

  // A reply
  request.respond('Thanks your data was saved:' + data.name + ',' + data.num);
}

// Show the data in the browser
route('/show', showData);

function showData(request) {
  // getAll gets all the records from the database
  // We need a call back for when the data is ready
  names.getAll(gotData);
   
  // When the data is ready
  function gotData(data) {
    // Generate a response with the data
    var output = '';
    for (i =0; i < data.length; i++) {
      output += data[i].name + ' ' + data[i].num + '<br/>';
    }
    request.respond(output);
  }
}

// Now spit out the data as JSON
function jsonAPI(request) {
  names.getAll(gotData);

  function gotData(data) {
    // These second two arguments make it a little prettier to look at
    request.respond(JSON.stringify(data), null, 2);
  }
}

// Start the server!
start();