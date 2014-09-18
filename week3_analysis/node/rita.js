var rita = require('rita');
var rs = rita.RiString("The white elephant smiled.");
console.log(rs.features());

console.log(rs.analyze());