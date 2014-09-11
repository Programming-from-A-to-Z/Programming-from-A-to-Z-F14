// Scramble what the user enters into a text field

// The scrambled text
var reversed = "";
var input;

function setup() {
  noCanvas();

  // A text area
  input = createElement("textarea","Enter some text.");
  input.attribute("rows",10);
  input.attribute("cols",100);

  // A button
  var button = createButton("Double the vowels!");
  button.mousePressed(doublewords);
    
  // An HTML Element for the resulting text
  reversed = createP("");
}

function doublewords() {
  // What has the user entered?
  var text = input.value();

  // A regex to match any vowel
  // Captured as group #1
  var regex = /([aeiou])/gi;         
  
  // Replacing the vowel with two of itself
  var output = text.replace(regex,'$1$1');
  // Update the HTML Element
  reversed.html(output);
}

function noCanvas() {
  var c = document.getElementById('defaultCanvas');
  if (c) {
    c.parentNode.removeChild(c);
  }
}

