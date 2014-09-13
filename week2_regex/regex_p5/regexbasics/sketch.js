

function setup() {
  noCanvas();

  
  // Demonstrates exec() in RegExp
  var text = 'This is a test of regular expressions.';  
  var regex = /test/;
  // The function exec() executes a search for a match in string.  the result is an array.
  var results = regex.exec(text);

  // Results
  createDiv('text: ' + text);
  createDiv('regex: ' + regex);
  createDiv('The match found in the text is: ' + results[0]);
  createDiv('And the index where it was found: ' + results.index);
  createDiv('And the input text in case you forgot: ' + results.input);
  createP('');

  // And again with capturing parentheses, the global flag, and a loop
  var text = 'Now another test including phone numbers: 212-555-1234 and 917-555-4321 and 646.555.9876.';  
  // Note the use of 'g' for global matches
  var regex = /(\d+)[-.]\d+[-.]\d+/g;               

  createDiv('text: ' + text);
  createDiv('regex: ' + regex);
  while (results = regex.exec(text)) {
    createDiv('The full match found in the text is: ' + results[0]);
    createDiv('Group 1 of the match is: ' + results[1]);
    createDiv('And the index where it was found: ' + results.index);
    // createDiv('And the input text in case you forgot: ' + results.input);
  }
  createP('');

  // Demonstrates match() in String
  var text = 'This is a test of regular expressions.';  
  var regex = /test/;               

  // The function match() executes a search for a match in string.  
  // The result, just like with exec(), is an array.
  var results = text.match(regex);

  createDiv('text: ' + text);
  createDiv('regex: ' + regex);
  createDiv('The match found in the text is: ' + results[0]);
  createDiv('And the index where it was found: ' + results.index);
  createDiv('And the input text in case you forgot: ' + results.input);
  createP('');

  // Now capturing parentheses and the global flag match() works differently
  // Note we can't actually get group 1 this way
  var text = 'Now another test including phone numbers: 212-555-1234 and 917-555-4321 and 646.555.9876.';  
  var regex = /(\d+)[-.]\d+[-.]\d+/g;               

  createDiv('text: ' + text);
  createDiv('regex: ' + regex);
  var results = text.match(regex);
  for (var i = 0; i < results.length; i++) {
    createDiv('Match ' + i + ': ' + results[i]);
  }
  createP('');


  var text = 'Replace every time the word "the" appears with the word ze.'; 
  var regex = /\bthe\b/g;  
  var replaced = text.replace(regex,'ze');
  createDiv(text);
  createDiv(replaced);
  createP('');

  var text = 'This is some markdown where text surrounded by an * is *italicized*.  *one* two *three* four five *six*.'; 
  var regex = /\*(\w+)\*/gi;

  // We can use captured groups in the replacement string by referencin $ and the group #
  var replaced = text.replace(regex,'<em>$1</em>');
  createDiv(text);
  createDiv(replaced);

}


