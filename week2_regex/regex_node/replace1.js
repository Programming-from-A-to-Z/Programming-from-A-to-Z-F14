
var text = 'Replace every time the word "the" appears with the word ze.'; 
var regex = /\bthe\b/g;  
var replaced = text.replace(regex,'ze');
console.log(text);
console.log(replaced);