// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14
     

// Context Free Grammar
// This example writes a "haiku" grammar file using a source text
// Using RiTa it counts syllables to place words properly in the grammar file 


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
var rita = require('rita');

// Read the file as utf8 and process the data in the function analyze
fs.readFile(filename, 'utf8', analyze);

function analyze(err, data) {
  if (err) {
    throw err;
  }

  
  var grammar = {};

  
  grammar['<start>'] = '<5-line> % <7-line> % <5-line>'
  grammar['<5-line>'] = '<1> <4>  |  <1> <3> <1>  |  <1> <1> <3>  |  <1> <2> <2>  |  <1> <2> <1> <1>  |  <1> <1> <2> <1>  |  <1> <1> <1> <2>  |  <1> <1> <1> <1> <1>  |  <2> <3>  |  <2> <2> <1>  |  <2> <1> <2>  |  <2> <1> <1> <1>  |  <3> <2>  |  <3> <1> <1>  |  <4> <1>  |  <5>'
  grammar['<7-line>'] = '<1> <1> <5-line>  |  <2> <5-line>  |  <5-line> <1> <1>  |  <5-line> <2>'
  
  // Create 5 arrays to store words of different syllable counts
  var wordsBySyllable = new Array(5);
  for (var i = 0; i < wordsBySyllable.length; i++) {
    wordsBySyllable[i] = [];
  }

  var concordance = new Concordance();
  concordance.process(data);

  var words = concordance.getKeys();

  // Go through all the words
  for (var i = 0; i < words.length; i++) {
    var s = words[i];
    // Use RiTa's Analyzer to determine syllable count
    var syllables = RiTa.getSyllables(s);
    console.log(syllables);
    // Syllables are separated with colons
    var count = syllables.split("/").length;
    if (count < 6) {
      // Add the word to the appropriate ArrayList
      // Assuming it has between 1 and 5 syllables
      wordsBySyllable[count-1].push(s);
    }
  }

  // Finish up the file by writing production rules
  // for 1-5 syllable words

  for (var i = 0; i < 5; i++) {
    var words = '';
    for (var j = 0; j < wordsBySyllable[i].length; j++) {
      var s = wordsBySyllable[i][j];
      words += s + " | ";
    }
    grammar['<'+ (i+1) + '>'] = words;

  }
  
  var jsonstring = JSON.stringify(grammar, null, ' ');

  // If we wanted to write a file out
  fs.writeFile("generated_grammar.json", jsonstring, output);
  function output(err) {
    if (err) {
      throw err;
    }
    console.log("The new file was saved!");
  }; 

}


function Concordance() {
  this.hash = {};
  this.keys = [];
  

  // Splitting up the text
  function split(text) {
    // Split into array of tokens
    return text.split(/\W+/);
  }

  // A function to validate a toke 
  function validate(token) {
    return /\w{2,}/.test(token);
  }

  // Process new text
  this.process = function(data) {
    var tokens = split(data);
    // For every token
    for (var i = 0; i < tokens.length; i++) {
      // Lowercase everything to ignore case
      var token = tokens[i].toLowerCase();
      if (validate(token)) {
        // Increase the count for the token
        this.increment(token);
      }
    }
  }
  
  // An array of keys
  this.getKeys = function() {
    return this.keys;
  }
  
  // Get the count for a word
  this.getCount = function(word) {
    return this.hash[word];
  }
  
  // Increment the count for a word
  this.increment = function(word) {
    // Is this a new word?
    if (this.hash[word] == undefined) {
      this.hash[word] = 1;
      this.keys.push(word);
    // Otherwise just increment its count
    } else {
      this.hash[word]++;
    }
  }
  
  // Sort array of keys by counts
  this.sortByCount = function() {
    // A fancy way to sort each element
    // Compare the counts
    var dict = this;
    this.keys.sort(function(a,b) {
      return (dict.getCount(b) - dict.getCount(a));
    });
  }

}

