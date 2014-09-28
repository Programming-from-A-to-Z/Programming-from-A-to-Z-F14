// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This is based on Allison Parrish's great RWET examples
// https://github.com/aparrish/rwet-examples


function tokenize(text) {
  return text.split(/\s+/);
}

// Like python's choice
function choice(somelist) {
  var i = floor(random(somelist.length));
  return somelist[i];
}

function MarkovGenerator(n, max, bw) {
  this.n = Number(n);     // # order (length) of ngrams
  this.max = max;         // # maximum number of elements to generate
  this.ngrams = {};       // # ngrams as keys; next elements as values
  this.beginnings = [];   // beginning ngram of every line
  this.byWord = bw;       // by word or by character?
}

MarkovGenerator.prototype.feed = function(text) {

  var tokens = text;
  if (this.byWord) {
    tokens = tokenize(text);
  }

  // discard this line if it's too short
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

  for (var i = 0; i < tokens.length-this.n; i++) {
    // I don't want it to be an array, let's make it a string again
    var gram, next;
    if (this.byWord) {
      gram = tokens.slice(i, i + this.n).join(' ');
      next = tokens[i + this.n];
    } else {
      gram = tokens.substring(i, i + this.n);
      next = tokens.charAt(i + this.n);       // get the element after the gram
    }

    // if we've already seen this ngram, append; otherwise, set the
    // value for this key as a new list
    if (this.ngrams.hasOwnProperty(gram)) {
      this.ngrams[gram].push(next);
    } else {
      this.ngrams[gram] = [next];
    }
  }
};

// Generate a text from the information in self.ngrams
MarkovGenerator.prototype.generate = function() {

  // Get a random line beginning; convert to a list. 
  current = choice(this.beginnings);

  var output;
  if (this.byWord) {
    output = tokenize(current);
  } else {
    output = current;
  }

  for (var i = 0; i < this.max; i++) {
    //console.log("Current: " + current);
    if (this.ngrams.hasOwnProperty(current)) {
      var possible_next = this.ngrams[current];
      var next = choice(possible_next);
      if (this.byWord) {
        output.push(next);
        current = output.slice(output.length-this.n, output.length).join(' ');
      } else {
        output += next;
        // get the last N entries of the output; we'll use this to look up
        // an ngram in the next iteration of the loop
        current = output.substring(output.length-this.n, output.length);
      }
    } else {
      break;
    }
  }
  if (this.byWord) {
    output = output.join(' ');
  }
  return output;
};