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
  var button = createButton("Reverse It!");
  button.mousePressed(reverseit);
    
  // An HTML Element for the resulting text
  reversed = createP("");
}

function reverseit() {
  // What has the user entered?
  var text = input.value();
  // Check to see if they entered something
  var len = text.length;
  if (text.length == '0') {
    alert("Enter something!");
  } else {
    // If they did, scramble up the text using string parsing
    // Reverse all the characters in the text
    var output = '';
    for (var i = text.length-1; i >= 0; i--) {
      output += text.charAt(i);
    }
    // Update the HTML Element
    reversed.html(output);
  }
}

