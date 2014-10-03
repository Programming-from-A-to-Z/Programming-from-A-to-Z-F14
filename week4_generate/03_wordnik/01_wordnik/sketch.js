// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Thank you to: https://github.com/dariusk/metaphor-a-minute/blob/master/metaphor.js

// Sign up for Wordnik here: https://www.wordnik.com/
// Developer documentation: http://developer.wordnik.com/

// Call to get a random noun
var randomNounURL = "http://api.wordnik.com/v4/words.json/randomWord?" + 
                    "&excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&" +
                    "&includePartOfSpeech=noun" + 
                    "&minLength=5&maxLength=-1" + 
                    "&api_key=_________";


// A random Adjective
var randomAdjURL  = "http://api.wordnik.com/v4/words.json/randomWord?" + 
                    "&includePartOfSpeech=adjective" + 
                    "&minLength=5&maxLength=-1" + 
                    "&api_key=_________";


// A random word
var randomWordURL = "http://api.wordnik.com/v4/words.json/randomWord?" + 
                    "&minLength=5&maxLength=-1" + 
                    "&api_key=_________";

function setup() {
  noCanvas();
  // Some buttons
  var button1 = createButton('get a random word');
  button1.mousePressed(randomWord);

  var button2 = createButton('get a random adjective');
  button2.mousePressed(randomAdj);

  var button3 = createButton('get a random noun');
  button3.mousePressed(randomNoun);


}

// Load the JSON for each one
function randomWord() {  
  loadJSON(randomWordURL, wordLoaded);
}

function randomAdj() {  
  loadJSON(randomAdjURL, wordLoaded);
}

function randomNoun() {  
  loadJSON(randomNounURL, wordLoaded);
}

// Callback for when the data is received
function wordLoaded(data) {
  createDiv(data.word);
}



