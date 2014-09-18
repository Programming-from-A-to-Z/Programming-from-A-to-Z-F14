// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// We can get command line arguments in a node program
// Here we're checking to make sure we've typed three things (the last being the directory)
if (process.argv.length < 3) {
  console.log('Oops, you forgot to pass in a directory path.');
  process.exit(1);
}

// // The 'fs' (file system) module allows us to read and write files
// // http://nodejs.org/api/fs.html
var fs = require('fs');
// Now we are grabbing just a path
var path = process.argv[2];
// And we'll look at all files in that path
var files = fs.readdirSync(path);

// Read the file as utf8 and process the data
// Notice how this is in a loop to parse all files
for (var i = 0; i  < files.length; i++) {
  fs.readFile(path+'/'+files[i], 'utf8', processFile);
}

// How many files have been read?
var fileCount = 0;
// An object that acts as dictionary of words and counts
var wordcounts = {};

function processFile(err, data) {
  // If there's a problem
  if (err) {
    console.log('ooops, there was an error reading this file');
    throw err;
  }

  // Split into array of tokens
  var tokens = data.split(/\W+/);

  // For every token
  for (var i = 0; i < tokens.length; i++) {
    // Lowercase everything to ignore case
    var token = tokens[i].toLowerCase();
    // Is this a new word?
    if (wordcounts[token] == undefined) {
      wordcounts[token] = 1;
    // Otherwise just increment its count
    } else {
      wordcounts[token]++;
    }
  }

  // This file finished
  fileCount++;

  // Is this the last file?
  if (fileCount === files.length) {
    finish();
  }
}


// Once we've hit the last file
function finish() {

  // This is a somewhat uncessary step but here's how
  // we could sort the concordance by counts
  
  // An array of sorted objects
  var sorted = [];

  // For every key in the dictionary
  for (key in wordcounts) {
    // Make sure it's really a key and is not empty
    if (wordcounts.hasOwnProperty(key) && key.length > 0) {
      // Add it to the array
      sorted.push({'word': key, 'count': wordcounts[key]});
    }
  }

  // A fancy way to sort each element
  // Compare the counts
  sorted.sort(function(a,b) {
    return (b.count - a.count);
  });
  
  
  // Just spit out the top 15 words
  var max = 15;
  if (sorted.length < max) {
    max = sorted.length;
  }
  for (var i = 0; i < max; i++) {
     console.log(sorted[i].word + ': ' + sorted[i].count);
  }
}

