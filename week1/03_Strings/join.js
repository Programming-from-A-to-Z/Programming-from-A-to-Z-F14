
// Concatenating an array of Strings manually
function join(str, separator) {
  var stuff = '';
  for (var i = 0; i < str.length; i++) {
    if (i != 0) stuff += separator;
    stuff += str[i];
  }
  return stuff;
}

var words = ['it','was','a','dark','and','stormy','night'];
console.log(join(words,' '));