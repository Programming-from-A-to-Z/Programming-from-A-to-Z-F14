// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// TF-IDF analysis
// http://en.wikipedia.org/wiki/Tf%E2%80%93idf

// We can get command line arguments in a node program
if (process.argv.length < 4) {
  console.log('Oops, you forgot to pass in a directory path and file to evaluate.');
  process.exit(1);
}

// The 'fs' (file system) module allows us to read and write files
// http://nodejs.org/api/fs.html
var fs = require('fs');
// A path for all the files in the world
var path = process.argv[2];
// The specific file to perform tf-idf on
var file = process.argv[3];
// And we'll look at all files in that path
var files = fs.readdirSync(path);

// An object that acts as dictionary of words
// With each word we'll store an object that includes
// Term frequency
// Inverse document frequency
// tf-idf score
var dictionary = {};

// Let's use an extra array just to track all the keys
// We can sort this array as needed
var keys = [];

// Read the main file we want to evaluate
fs.readFile(file, 'utf-8', countWords);

// Total word count of document
var totalwords = 0;

// Count the words of just that one file
function countWords(err, data) {
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
    if (token.length > 0) {
      // Is this a new word?
      if (dictionary[token] === undefined) {
        dictionary[token] = {};
        // The word itself
        dictionary[token].word = token;
        // Count of 1
        dictionary[token].count = 1;
        // This file will get counted again later
        dictionary[token].docCount = 0;
        // Add a key
        keys.push(token);
      // Otherwise just increment its count
      } else {
        dictionary[token].count++;
      }
      // Increment the count of total words
      totalwords++;
    }
  }
}

// Now we have to look through every file and determine
// the document frequency
var fileCount = 0;
for (var i = 0; i  < files.length; i++) {
  fs.readFile(path+'/'+files[i], 'utf8', countDocuments);
}

// Read all docs
function countDocuments(err, data) {
  // If there's a problem
  if (err) {
    console.log('ooops, there was an error reading this file');
    throw err;
  }
  
  // Split into words
  var tokens = data.split(/\W+/);
  
  // A temporary dictionary of words in this document
  var tempDict = {};

  // For every token
  for (var i = 0; i < tokens.length; i++) {
    // Lowercase everything to ignore case
    var token = tokens[i].toLowerCase();
    // Simpler we just need to see if it exists or not
    if (tempDict[token] === undefined) {
      tempDict[token] = true;
    }
  }


  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    // Does this word exist in this document?
    if (tempDict[key]) {
      dictionary[key].docCount++;
    }
  }

  fileCount++;
  // Done with the files, finish
  if (fileCount === files.length) {
    finish();
  }
}

// Once we've hit the last file
function finish() {
  // calculate tf-idf score
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var word = dictionary[key];
    var tf = word.count / totalwords;
    // See: 
    var idf = Math.log(files.length / word.docCount);
    word.tfidf = tf * idf;
  }


  // A fancy way to sort each element
  // Sort the keys but the tfidf score in the dictionary
  keys.sort(function(a,b) {
    return (dictionary[b].tfidf - dictionary[a].tfidf);
  });
  
  
  // Just spit out the top 15 ones
  var max = 15;
  if (keys.length < max) {
    max = keys.length;
  }
  for (var i = 0; i < max; i++) {
    var key = keys[i];
    var score = dictionary[key].tfidf.toPrecision(2);
    console.log(key + ': ' + score + ': ' + dictionary[key].count + ',' + dictionary[key].docCount);
  }
}