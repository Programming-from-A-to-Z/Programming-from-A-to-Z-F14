

function generate() {
  var output = document.getElementById('markov');
  var order = document.getElementById('order');
  // No delimiter means do it by char
  var generator = new MarkovGenerator(order.value,500,'');
  var input = document.getElementById('input');
  generator.feed(input.value);
  output.innerHTML = generator.generate();
}
