// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This is based on Allison Parrish's great RWET examples
// https://github.com/aparrish/rwet-examples

// This object will do a Markov chain by character or by "word"

// A function to split a text up into tokens
// Just using spaces for now to preserve punctuation
function tokenize(text) {
  return text.split(/\s+/);
}

// Like python's choice this will return a 
// random element from an array
function choice(somelist) {
  var i = floor(random(somelist.length));
  return somelist[i];
}


// A MarkovGenerate object
function MarkovGenerator(n, max, bw) {
  // Order (or length) of each ngram
  this.n = Number(n);
  // What is the maximum amount we will generate?
  this.max = max;
  // An object as dictionary
  // each ngram is the key, a list of possible next elements are the values
  this.ngrams = {};
  // A separate array of possible beginnings to generated text
  this.beginnings = [];
  // Are we doing this by Word or by character?
  this.byWord = bw;
}

// A function to feed in text to the markov chain
MarkovGenerator.prototype.feed = function(text) {

  // By default we'll just do it by character
  var tokens = text;
  // However, we might split it up into an array of words
  if (this.byWord) {
    tokens = tokenize(text);
  }

  // Discard this line if it's too short
  if (tokens.length < this.n) {
    return false;
  }

  // Store the first ngram of this line
  var beginning; 
  if (this.byWord) {
    beginning = tokens.slice(0, this.n).join(' ');
  } else {
    beginning = tokens.substring(0, this.n);
  }
  this.beginnings.push(beginning);
  
  // Now let's go through everything and create the dictionary
  for (var i = 0; i < tokens.length-this.n; i++) {
    // Current ngram and the next one
    var gram, next;
    // By words we have to deal with an array
    if (this.byWord) {
      gram = tokens.slice(i, i + this.n).join(' ');
      next = tokens[i + this.n];
    // Otherwise we're just talking about a plain old String
    } else {
      gram = tokens.substring(i, i + this.n);
      next = tokens.charAt(i + this.n);       // get the element after the gram
    }

    // Is this a new one?
    if (!this.ngrams.hasOwnProperty(gram)) {
      this.ngrams[gram] = [];
    }
    // Add to the list
    this.ngrams[gram].push(next);
  }
};

// Generate a text from the information ngrams
MarkovGenerator.prototype.generate = function() {

  // Get a random  beginning 
  current = choice(this.beginnings);
  
  var output;
  // We'll keep everything in an array if by word
  if (this.byWord) {
    output = tokenize(current);
  // Otherwise a plain old String is good enough
  } else {
    output = current;
  }
  
  // Generate a new token max number of times
  for (var i = 0; i < this.max; i++) {
    // If this is a valid ngram
    if (this.ngrams.hasOwnProperty(current)) {
      // What are all the possible next tokens
      var possible_next = this.ngrams[current];
      // Pick one randomly
      var next = choice(possible_next);
      // If by word store the answer in an array
      if (this.byWord) {
        output.push(next);
        // Get the last N entries of the output; we'll use this to look up
        // an ngram in the next iteration of the loop
        current = output.slice(output.length - this.n, output.length).join(' ');
      // If by characteer
      } else {
        output += next;
        // By character is a bit simpler since we can just deal with it as a String
        current = output.substring(output.length-this.n, output.length);
      }
    } else {
      break;
    }
  }

  // Array back to a String if we need to
  if (this.byWord) {
    output = output.join(' ');
  }

  // Here's what we got!
  return output;
};