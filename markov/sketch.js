

function generate() {
  var output = document.getElementById('markov');
  var order = document.getElementById('order');
  
  // No delimiter means do it by char
  var delimiter = '';
  if(document.getElementById('word').checked) {
    delimiter = ' ';
  }

  var len = Number(document.getElementById('length').value);
  console.log(len);

  var generator = new MarkovGenerator(order.value,len,delimiter);
  var input = document.getElementById('input');
  generator.feed(input.value);
  output.innerHTML = generator.generate();
}
