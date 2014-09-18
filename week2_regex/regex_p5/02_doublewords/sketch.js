
// The results of what the regex found
var pelement = "";
var input;

function setup() {
  noCanvas();

  // A text area
  input = createElement("textarea","Enter some text.");
  input.attribute("rows",10);
  input.attribute("cols",100);

  // A button
  var button = createButton("Find double words.");
  button.mousePressed(doublewords);
    
  // An HTML Element for the resulting text
  pelement = createP("");
}

function doublewords() {
  // What has the user entered?
  var text = input.value();

  // Using match() from String is the simplest way to do this
  // Regex that matches double words, note use of global flag
  var regex = /\b(\w+)\b\s+\1/g;         
  var results = text.match(regex);

  var output = '';

  if (results == null) {
    pelement.html('none found!');
  } else {
    // We get an array of matches back
    for (var i = 0; i < results.length; i++) {
      output += results[i] + '<br/>';
    }
    // Update the HTML Element
    pelement.html(output);
  }
}

