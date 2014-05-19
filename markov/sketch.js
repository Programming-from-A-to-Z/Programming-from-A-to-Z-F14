

function generate() {
  var output = document.getElementById('markov');
  var generator = new MarkovGenerator(2,500);
  var input = document.getElementById('input');
  generator.feed(input.value);
  output.innerHTML = generator.generate();
}
