// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This is based on Allison Parrish's great RWET examples
// https://github.com/aparrish/rwet-examples

// Like python's choice this will return a 
// random element from an array
function choice(somelist) {
  var i = floor(random(somelist.length));
  return somelist[i];
}

// A MarkovGenerate object
function MarkovGenerator(n, max) {
  // Order (or length) of each ngram
  this.n = Number(n);
  // What is the maximum amount we will generate?
  this.max = max;
  // An object as dictionary
  // each ngram is the key, a list of possible next elements are the values
  this.ngrams = {};
  // A separate array of possible beginnings to generated text
  this.beginnings = [];
}

// A function to feed in text to the markov chain
MarkovGenerator.prototype.feed = function(text) {

  // Discard this line if it's too short
  if (text.length < this.n) {
    return false;
  }

  // Store the first ngram of this line
  var beginning = text.substring(0, this.n);
  this.beginnings.push(beginning);
  
  // Now let's go through everything and create the dictionary
  for (var i = 0; i < text.length - this.n; i++) {
    var gram = text.substring(i, i + this.n);
    var next = text.charAt(i + this.n);
    // Is this a new one?
    if (!this.ngrams.hasOwnProperty(gram)) {
      this.ngrams[gram] = [];
    }
    // Add to the list
    this.ngrams[gram].push(next);
  }
}

// Generate a text from the information ngrams
MarkovGenerator.prototype.generate = function() {

  // Get a random  beginning 
  var current = choice(this.beginnings);
  var output = current;
  
  // Generate a new token max number of times
  for (var i = 0; i < this.max; i++) {
    // If this is a valid ngram
    if (this.ngrams.hasOwnProperty(current)) {
      // What are all the possible next tokens
      var possible_next = this.ngrams[current];
      // Pick one randomly
      var next = choice(possible_next);
      // Add to the output
      output += next;
      // Get the last N entries of the output; we'll use this to look up
      // an ngram in the next iteration of the loop
      current = output.substring(output.length-this.n, output.length);
    } else {
      break;
    }
  }
  // Here's what we got!
  return output;
}