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

// Our concordance is in a database
var concordance = useDatabase('words');

// A route for saving new data
route('/save', saveData);

// This makes a callback that adds a new record to the database
// Or updates an existing one
function searchIt(word, wait) {
  concordance.search('word', word, searchComplete);  
  function searchComplete(data) {
    // If it's a new word
    if (data.length === 0) {
      // Add it to the database
      var record = {};
      record.word = word;
      record.count = 1;
      concordance.add(record);

      // Some debugging
      console.log('New word! ' + word + ': ' + 1);
    } else {
      // If it exists, let's assume it's the first thing that came back
      var record = data[0];
      // Increase the count
      var num = data[0].count + 1;
      var id = data[0]._id;

      // This feature for updating a database record is in progress
      // The syntax looks weird and someday it will be simpler
      // concordance.change(id, {count: num});
      // concordance.db.update({_id: id}, {$set: {count: num}}, {}); 
      concordance.db.update({_id: id}, {$inc: {count: 1}}, {}); 
      
      // Some debugging
      console.log('Old word! ' + word + ': ' + num);
    }
  }
}

// function timeit(wait, id, word, num) {
//   setTimeout(function() {
//     concordance.db.update({_id: id}, {$inc: {count: 1}}, {}); 
//     console.log('Old word! ' + word + ': ' + num);

//   }, wait);
// }

// Handle saving data
function saveData(request) {
  // Did you forget to send data?
  if (request.fields === undefined) {
    request.respond('no data from form');
    return;
  }

  // Some text input
  var txt = request.fields.txt;

  // Split it up into words
  var tokens = txt.split(/\W+/);  
  for (var i = 0; i < tokens.length; i++) {
    // And add it or update it in the database
    searchIt(tokens[i],i*1000);
  }

  // Send back to the page again
  request.redirect('/');
}

// A route for serving up the data
route('/json', jsonData);

// Now spit out the data as JSON
function jsonData(request) {
  // Get everything from the database
  // The second argument sorts it by count in descending order
  concordance.getAll(gotData,{count: -1});

  function gotData(data) {
    // These second two arguments make it a little prettier to look at
    request.respond(JSON.stringify(data), null, 2);
  }
}

// Start the server
start();