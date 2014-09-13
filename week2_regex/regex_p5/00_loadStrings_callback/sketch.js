

// Variable where we'll join all the text together
var text;

// Now we can do stuff with the text
function setup() {
  noCanvas();
  loadStrings('files/spam.txt', fileready)
}

function fileready(lines) {
  // join() joins the elements of an array
  // Here we pass in a line break to retain formatting
  text = lines.join('<br/>');
  createP(text);
}

