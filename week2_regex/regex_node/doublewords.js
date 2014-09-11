
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

// Read the file as utf8 and process the data in the function analyze
fs.readFile(filename, 'utf8', analyze);

function analyze(err, data) {
  if (err) {
    throw err;
  }
  
  // Using match() from String is the simplest way to do this
  // Regex that matches double words, note use of global flag
  var regex = /\b(\w+)\b\s+\1/g;         
  var results = data.match(regex);
  // We get an array of matches back
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
  
  // Using exec() will give us more information about the match
  // including captured groups, the index where the match was found
  var regex = /\b(\w+)\b\s+\1/g;
  var results = regex.exec(data);
  // Note how we have to call exec multiple times to iterate over the matches
  while (results != null) {
    console.log(results[0], 'index:', results.index);
    results = regex.exec(data);
  }

}