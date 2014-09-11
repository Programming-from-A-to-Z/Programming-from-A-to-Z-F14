
var text = "This is a test of regular expressions.";  
var regex = /test/;               

// The function exec() executes a search for a match in string.  the result is an array.
var results = regex.exec(text);

console.log('The match found in the text is: ' + results[0]);
console.log('And the index where it was found: ' + results.index);
console.log('And the input text in case you forgot: ' + results.input);

// Other regex methods to look at are:
// test()

// And methods for String objects:
// match(): same as exec()
// search(): returns index of the match or -1 for no match
// replace(): replaces a match of a regex with a replacement string
// split(): splits up a string into an array of strings
