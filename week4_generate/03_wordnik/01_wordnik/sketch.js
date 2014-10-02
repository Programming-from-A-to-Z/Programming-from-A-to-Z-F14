var randomNounURL = "http://api.wordnik.com/v4/words.json/randomWord?" + 
                    "&excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&" +
                    "&includePartOfSpeech=noun" + 
                    "&minLength=5&maxLength=-1" + 
                    "&api_key=_________";


var randomAdjURL  = "http://api.wordnik.com/v4/words.json/randomWord?" + 
                    "&includePartOfSpeech=adjective" + 
                    "&minLength=5&maxLength=-1" + 
                    "&api_key=_________";


var randomWordURL = "http://api.wordnik.com/v4/words.json/randomWord?" + 
                    "&minLength=5&maxLength=-1" + 
                    "&api_key=_________";

function setup() {
  noCanvas();
  var button1 = createButton('get a random word');
  button1.mousePressed(randomWord);

  var button2 = createButton('get a random adjective');
  button2.mousePressed(randomAdj);

  var button3 = createButton('get a random noun');
  button3.mousePressed(randomNoun);


}

function randomWord() {  
  loadJSON(randomWordURL, wordLoaded);
}

function randomAdj() {  
  loadJSON(randomAdjURL, wordLoaded);
}

function randomNoun() {  
  loadJSON(randomNounURL, wordLoaded);
}

function wordLoaded(data) {
  console.log(data);
  createDiv(data.word);
}



