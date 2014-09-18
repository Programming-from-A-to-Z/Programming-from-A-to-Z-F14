// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Bayesian Text Classification A vs. B

// We can get command line arguments in a node program
if (process.argv.length < 5) {
  console.log('Pass in two directory paths for A and B training data and a file to evaluate.');
  process.exit(1);
}

// The 'fs' (file system) module allows us to read and write files
// http://nodejs.org/api/fs.html
var fs = require('fs');
var classifier = require('./classifier');
// A path for training files A and B
var pathA = process.argv[2];
var pathB = process.argv[3];

// A specific file to evaluate
var file = process.argv[4];
// And we'll look at all files in those paths
var filesA = fs.readdirSync(pathA);
var filesB = fs.readdirSync(pathB);

// A classifier object
var classifier = new classifier.Classifier();

// Train for category A
for (var i = 0; i  < filesA.length; i++) {
  fs.readFile(pathA+'/'+filesA[i], 'utf8', trainA);
}

// Train for category B
for (var i = 0; i  < filesB.length; i++) {
  fs.readFile(pathB+'/'+filesB[i], 'utf8', trainB);
}

// Have we finished reading files
var afinished = false;
var bfinished = false;

// Read all docs
function trainA(err, data) {
  // If there's a problem
  if (err) {
    console.log('ooops, there was an error reading this file');
    //throw err;
  }
  
  // Train the data for category A
  classifier.train(data,'A');

  // Check if we're done
  if (classifier.docCountA === filesA.length) {
     afinished = true;
     if (bfinished) {
       finish();
     }
  }
}

// Read all docs
function trainB(err, data) {
  // If there's a problem
  if (err) {
    console.log('ooops, there was an error reading this file');
    //throw err;
  }
  
  // Train the data for category B
  classifier.train(data,'B');
  // Check if we're done
  if (classifier.docCountB === filesB.length) {
     bfinished = true;
     if (afinished) {
       finish();
     }
  }
}

// When we are done
function finish() {
  classifier.probabilities();
  console.log('Finished training');

  // Now read a file to guess about
  fs.readFile(file,'utf8',guess);
}


// Guess the data of this file
function guess(err, data) {
  // If there's a problem
  if (err) {
    console.log('ooops, there was an error reading this file');
    throw err;
  }

  classifier.guess(data);

}
