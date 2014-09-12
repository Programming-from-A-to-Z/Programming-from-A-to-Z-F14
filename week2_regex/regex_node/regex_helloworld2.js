
// Demonstrates match() in String

var text = "This is a test of regular expressions.";  
var regex = /test/;               

// The function match() executes a search for a match in string.  
// The result, just like with exec(), is an array.
var results = text.match(regex);

console.log('The match found in the text is: ' + results[0]);
console.log('And the index where it was found: ' + results.index);
console.log('And the input text in case you forgot: ' + results.input);

// Now capturing parentheses and the global flag match() works differently
// Note we can't actually get group 1 this way
text = "Now another test including phone numbers: 212-555-1234 and 917-555-4321 and 646.555.9876.";  
regex = /(\d+)[-.]\d+[-.]\d+/g;               

results = text.match(regex);
for (var i = 0; i < results.length; i++) {
  console.log('Match ' + i + ': ' + results[i]);
}