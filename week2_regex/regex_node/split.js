
// We can get command line arguments in a node program
// Here we're checking to make sure we've typed three things (the last being the filename)
if (process.argv.length < 3) {
  console.log('Oops, you forgot to pass in a text file.');
  process.exit(1);
}

// The 'fs' (file system) module allows us to read and write files
// http://nodejs.org/api/fs.html
var fs = require('fs');
var filename = process.argv[2];

// Read the file as utf8 and process the data in the function analyze
fs.readFile(filename, 'utf8', analyze);

function analyze(err, data) {
  if (err) {
    throw err;
  }
  
  // Any character not a-z0-9
  var regex = /\W/;   // try it with capturing parenthese to keep the delimiter! /(\W)/

  // Split into an array using the regex as a delimiter
  var words = data.split(regex);

  // The array of Strings
  console.log(words);
  
  // The length
  console.log('Total words: ' + words.length);
}