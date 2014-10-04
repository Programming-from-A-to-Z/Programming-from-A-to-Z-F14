// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This is based on Allison Parrish's great RWET examples
// https://github.com/aparrish/rwet-examples

// Call to get a list of random nouns
var randomNounURL = "http://api.wordnik.com/v4/words.json/randomWords?" + 
                    "&includePartOfSpeech=noun" + 
                    "&minLength=1&maxLength=-1" + 
                    "&api_key=______________";

// Call to get a list of random verbs
var randomVerbURL = "http://api.wordnik.com/v4/words.json/randomWords?" + 
                    "&includePartOfSpeech=verb" + 
                    "&minLength=1&maxLength=-1" + 
                    "&api_key=______________";

function setup() {
  // A button to generate a new sentence
  var button = createButton('generate');
  button.mousePressed(generate);
  noCanvas();
}

function generate() {
  // In this example we're recreating the grammar each time with a bunch of random nouns and verbs
  // We could certainly preload a lot of wordnik
  // Or build up the grammar over time instead.

  // A grammar object
  var cfree;
  // An empty one
  cfree = new ContextFree();
  // We can add rules manually
  cfree.add_rule('S', ['NP', 'VP']);
  cfree.add_rule('NP', ['The', 'N']);
  cfree.add_rule('VP', ['V', 'the', 'N']);

  // First get a bunch of nouns
  loadJSON(randomNounURL, function(data) {
    for (var i = 0; i < data.length; i++) {
      cfree.add_rule('N', [data[i].word]);
    }
    // Once you've got the nouns, load the verbs
    loadJSON(randomVerbURL, function(data) {
      for (var i = 0; i < data.length; i++) {
        cfree.add_rule('V', [data[i].word]);
      }
      // Once you have the verbs do an expansion
      var expansion = cfree.get_expansion('S');
      // Make a DIV with the new sentence
      createP(expansion);
    }); 
  });
}


