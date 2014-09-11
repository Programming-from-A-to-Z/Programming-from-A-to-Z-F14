
var text = 'This is some markdown where text surrounded by an * is *italicized*.  *one* two *three* four five *six*.'; 
var regex = /\*(\w+)\*/gi;

// We can use captured groups in the replacement string by referencin $ and the group #
var replaced = text.replace(regex,'<em>$1</em>');
console.log(text);
console.log(replaced);