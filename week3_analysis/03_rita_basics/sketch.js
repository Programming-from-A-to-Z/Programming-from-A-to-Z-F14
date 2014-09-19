
var input1,input2;

var lex;

function setup() {
  noCanvas();
  lex = new RiLexicon();

  // A text area
  input1 = createInput("This is a sentence.");

  // A button
  var button = createButton("Analyze it!");
  button.mousePressed(analyze);

  input2 = createInput("word");

  // A button
  var button = createButton("Show me rhymes.");
  button.mousePressed(rhyme);
    
  output = createP("");
}

function analyze() {
  clearDivs();
  // What has the user entered?
  var rs = new RiString(input1.value());
  var features = rs.features();

  createDiv('Stresses: ' + features.stresses).class('rita');
  createDiv('Phonemes: ' + features.phonemes).class('rita');
  // http://rednoise.org/rita/reference/PennTags.html
  createDiv('Parts of speech: ' + features.pos).class('rita');
}

function rhyme() {
  clearDivs();

  var words = input2.value().split(/\W+/);
  
  // Just picking out the last word
  var last = words.length-1;
  var rhymes = lex.rhymes(words[last]);
  for (var i = 0; i < rhymes.length; i++) {
    createDiv(rhymes[i]).class('rita');
  }
}

// Go through and remove all the divs
function clearDivs() {
  var divs = getElements('rita');
  for (var i = 0; i < divs.length; i++) {
    divs[i].remove();
  }
}
