
// We can get command line arguments in a node program
// Here we're checking to make sure we've typed three things (the last being the filename)
if (process.argv.length < 4) {
  console.log('Oops, you forgot to pass in a text file and a word to search for.');
  process.exit(1);
}

// The 'fs' (file system) module allows us to read and write files
// http://nodejs.org/api/fs.html
var fs = require('fs');
var filename = process.argv[2];
var search = process.argv[3];

// Read the file as utf8 and process the data in the function analyze
fs.readFile(filename, 'utf8', everyother);

function everyother(err, data) {
  if (err) {
    throw err;
  }

  // Split text by wherever there is a space
  var words = data.split(' ');
  for (var i = 0; i < words.length-1; i++) {
    if (words[i] == search) {
      console.log(words[i] + ' '  + words[i+1]);
    }
  }
}