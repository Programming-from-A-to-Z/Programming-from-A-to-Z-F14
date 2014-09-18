// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

function Dictionary() {
  this.hash = {};
  this.keys = [];

  function split(text) {
    // Split into array of tokens
    return text.split(/\W+/);
  }

  // A function to validate a toke 
  function validate(token) {
    return /\w{2,}/.test(token);
  }


  this.process = function(data) {
    var tokens = split(data);
    // For every token
    for (var i = 0; i < tokens.length; i++) {
      // Lowercase everything to ignore case
      var token = tokens[i].toLowerCase();
      if (validate(token)) {
        this.increment(token);
      }
    }
  }

  this.getKeys = function() {
    return this.keys;
  }

  this.getCount = function(word) {
    return this.hash[word].count;
  }

  this.increment = function(word) {
    // Is this a new word?
    if (this.hash[word] == undefined) {
      this.hash[word] = {};
      this.hash[word].count = 1;
      this.hash[word].docCount = 0;
      this.hash[word].word = word;
      this.keys.push(word);
    // Otherwise just increment its count
    } else {
      this.hash[word].count++;
    }
  }

  this.sortByCount = function() {
    // A fancy way to sort each element
    // Compare the counts
    var dict = this;
    this.keys.sort(function(a,b) {
      return (dict.getCount(b) - dict.getCount(a));
    });
  }

}


