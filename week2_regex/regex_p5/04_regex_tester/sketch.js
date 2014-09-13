// Scramble what the user enters into a text field

// The scrambled text
var inputElt;
var regexElt;
var outputElt;

var globalElt;
var caseElt;

var lorum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


function setup() {
  noCanvas();
  
  // See how we can make a div
  var inputDiv = createDiv('');
  inputDiv.style('padding','10px');
  // A text area
  inputElt = createElement("textarea",lorum);
  inputElt.attribute("rows",10);
  inputElt.attribute("cols",100);
  // And then put something in it
  inputElt.parent(inputDiv);

  
  var regexDiv = createDiv('');
  regexDiv.style('padding','10px');
  regexElt = createInput('[A-Z][a-z]+');
  regexElt.parent(regexDiv);
  globalElt = createInput();
  globalElt.attribute('type','checkbox');
  globalElt.parent(regexDiv);
  var label = createSpan('global');
  label.parent(regexDiv);

  caseElt = createInput();
  caseElt.attribute('type','checkbox');
  caseElt.parent(regexDiv);
  var label = createSpan('case insensitive');
  label.parent(regexDiv);

  var chec

  // A button
  var buttonDiv = createDiv('');
  buttonDiv.style('padding','10px');
  var button = createButton("Run the regex");
  button.style('padding','10px');
  button.mousePressed(process);
  button.parent(buttonDiv);
    
  // An HTML Element for the resulting text
  var outputDiv = createDiv('');
  outputDiv.style('margin','10px');
  outputDiv.style('padding','10px');
  outputDiv.style('background','#AAAAAA');
  outputElt = createP('results will appear here');
  outputElt.parent(outputDiv);
}

function process() {
  
  var flags = '';
  if (globalElt.elt.checked) flags += 'g';
  if (caseElt.elt.checked)   flags += 'i';
  
  var regex = new RegExp(regexElt.value(),flags);
  console.log(regex);  
  var input = inputElt.value();
  var results = input.match(regex);
  console.log(results);

  outputElt.html(results);

}
