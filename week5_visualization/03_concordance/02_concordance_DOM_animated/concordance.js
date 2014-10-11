// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// An object to store all the info related to a concordance

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
  
  // This returns a function to increment a token
  // There we'll make the DIV
  function animate(conc, token){
    return function(){
      conc.increment(token);
    }
  }

  // Process new text
  this.process = function(data) {
    var tokens = split(data);
    // For every token
    for (var i = 0; i < tokens.length; i++) {
      // Lowercase everything to ignore case
      var token = tokens[i].toLowerCase();
      if (validate(token)) {

        // Here is where we call setTimeout and wait 10 milliseconds for each word
        // We could maybe do this recursively or with setInterval
        setTimeout(animate(this, token), i*10);
      }
    }
  }
  
  // An array of keys
  this.getKeys = function() {
    return this.keys;
  }
  
  // Get the count for a word
  this.getCount = function(word) {
    return this.hash[word].count;
  }
  
  // Increment the count for a word
  this.increment = function(word) {
    // Is this a new word?
    if (this.hash[word] == undefined) {
      this.hash[word] = {};
      this.hash[word].count = 1;

      // If it's a new word make a new DIV
      // And associate it with the word object
      this.hash[word].div = createDiv(word + ' ');
      this.hash[word].div.style('display','inline');
      this.keys.push(word);
    // Otherwise just increment its count
    } else {

      // Otherwise just increment the count and update the size
      // of the existing DIV
      this.hash[word].count++;
      this.hash[word].div.style('font-size',this.hash[word].count+'pt');
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


