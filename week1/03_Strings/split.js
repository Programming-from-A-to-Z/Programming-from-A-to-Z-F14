var spaceswords = 'The quick brown fox jumps over the lazy dog.';
var list1 = spaceswords.split(' ');
console.log(list1[0]);
console.log(list1[1]);

var commaswords = 'The,quick,brown,fox,jumps,over,the,lazy,dog.';
var list2 = commaswords.split(',');
for (var i = 0; i < list2.length; i++) {
  console.log(i + ': ' + list2[i]);
}

// Calculate sum of a list of numbers in a string
var numbers = '8,67,5,309';
var numlist = numbers.split(',');
var sum = 0;
for (var i = 0; i < numlist.length; i++) {
  sum = sum + Number(numlist[i]);  // Converting each String into an number!
}
console.log(sum);