
function MarkovGenerator(n,max) {
  this.n = n;// # order (length) of ngrams
  this.max = max;// # maximum number of elements to generate
  this.ngrams = {}; // # ngrams as keys; next elements as values
  this.beginnings = []; // beginning ngram of every line
}

MarkovGenerator.prototype.tokenize = function(text) {
  return text.split(" ");
};

MarkovGenerator.prototype.feed = function(text) {

  var tokens = this.tokenize(text);
  //console.log(tokens);

  // discard this line if it's too short
  if (tokens.length < this.n) {
    return false;
  }

  // store the first ngram of this line
  var beginning = tokens.slice(0,this.n);
  this.beginnings.push(beginning.join(" "));

  //console.log(this.beginnings);

  for (var i = 0; i < tokens.length-this.n; i++) {
    // I don't want it to be an array, let's make it a string again
    var gram = tokens.slice(i,i+this.n).join(" ");
    // We can leave the value as an array?
    var next = tokens[i+this.n]; // # get the element after the gram

    //console.log(gram);

    // if we've already seen this ngram, append; otherwise, set the
    // value for this key as a new list
    if (this.ngrams.hasOwnProperty(gram)) {
      this.ngrams[gram].push(next);
    } else {
      this.ngrams[gram] = [next];
    }
  }

};

// called from generate() to join together generated elements
// TODO: Is this joining an array of strings into a string?
MarkovGenerator.prototype.concatenate = function(source) {
  //return " ".join(source);
  return source.join(" ");
};

// Like python's choice
function choice(somelist) {
  var i = Math.floor(Math.random()*somelist.length);

  return somelist[i];
}

// generate a text from the information in self.ngrams
MarkovGenerator.prototype.generate = function() {

  // get a random line beginning; convert to a list. 
  current = choice(this.beginnings);

  var output = current.split(" ");

  for (var i = 0; i < this.max; i++) {
    //console.log("Current: " + current);
    if (this.ngrams.hasOwnProperty(current)) {
      var possible_next = this.ngrams[current];
      var next = choice(possible_next);
      output.push(next);
      // get the last N entries of the output; we'll use this to look up
      // an ngram in the next iteration of the loop
      current = output.slice(output.length-this.n,output.length).join(" ");
    } else {
      break;
    }
  }
  var output_str = this.concatenate(output);
  return output_str;
};