
// We can get command line arguments in a node program
// Here we're checking to make sure we've typed three things (the last being the filename)
if (process.argv.length < 3) {
  console.log('Oops, you forgot to pass in a url.');
  process.exit(1);
}

// URL from command line
var url = process.argv[2];

// This request module makes it easy to do a get request from a URL
// To install '% npm install request'
var request = require('request');

// Make a request to a url
request(url, analyze);

// Analyze that url
function analyze(error, response, data) {
  // If no error and the response code is 200 (i.e. ok)
  if (!error && response.statusCode == 200) {

    // A regex to match href='something' capturing something
    // Make sure we have /g
    var regex = /href\s*=\s*['"](.*?)['"]/gi;

    // Fill this array
    var links = [];
    
    // We have to use exec and loop because of the capturing group
    var match = regex.exec(data);
    while (match != null) {
      links.push(match[1]);
      match = regex.exec(data);
    }

    // All the links
    console.log(links);

    // What happens if you were to crawl these links and look for more!
  }
}

