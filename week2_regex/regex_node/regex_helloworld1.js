
// Demonstrates exec() in RegExp

var text = "This is a test of regular expressions.";  
var regex = /test/;               

// The function exec() executes a search for a match in string.  the result is an array.
var results = regex.exec(text);

console.log('The match found in the text is: ' + results[0]);
console.log('And the index where it was found: ' + results.index);
console.log('And the input text in case you forgot: ' + results.input);

// And again with capturing parentheses, the global flag, and a loop
text = "Now another test including phone numbers: 212-555-1234 and 917-555-4321 and 646.555.9876.";  
// Note the use of 'g' for global matches
regex = /(\d+)[-.]\d+[-.]\d+/g;               

while ((results = regex.exec(text)) != null) {
  console.log('The full match found in the text is: ' + results[0]);
  console.log('Group 1 of the match is: ' + results[1]);
  console.log('And the index where it was found: ' + results.index);
  // console.log('And the input text in case you forgot: ' + results.input);
}