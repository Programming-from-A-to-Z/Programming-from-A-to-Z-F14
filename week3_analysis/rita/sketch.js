
var input;
var output;


function setup() {
  noCanvas();

  // A text area
  input = createInput("This is a sentence.");

  // A button
  var button = createButton("Analyze it!");
  button.mousePressed(analyze);
    
  output = createP("");
}

function analyze() {
  // What has the user entered?
  var rs = new RiString(input.value());
  var features = rs.features();
  console.log(rs.features());


  createP('Phonemes: ' + features.phonemes);

  // http://rednoise.org/rita/reference/PennTags.html
  createP('Parts of speech: ' + features.pos);
}

