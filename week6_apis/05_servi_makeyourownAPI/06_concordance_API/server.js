var servi = require('servi');
var app = new servi(true);

port(8080);

serveFiles('public');

var concordance = useDatabase('words');

route('/save', saveData);

function searchIt(word) {
  return function(data) {
    if (data.length === 0) {
      var record = {};
      record.word = word;
      record.count = 1;
      concordance.add(record);
      console.log('New word! ' + word + ': ' + 1);
    } else {
      var record = data[0]; // Assume it's the first record
      var num = data[0].count + 1;
      var id = data[0]._id;
      console.log('Old word! ' + word + ': ' + num);
      // concordance.change(id, {count: num});
      concordance.db.update({_id: id}, {$set: {count: num}}, {});  
    }
  }
}

function saveData(request) {
  if (request.fields === undefined) {
    request.respond('no data from form');
    return;
  }
  var txt = request.fields.txt;
  var tokens = txt.split(/\W+/);  
  for (var i = 0; i < tokens.length; i++) {
    concordance.search('word', tokens[i], searchIt(tokens[i])); 
  }
  //request.respond('finished');
  request.redirect('/');
}

route('/json', jsonData);

function jsonData(request) {
  concordance.getAll(gotData,{count: -1});
  function gotData(data) {
    var output = JSON.stringify(data);
    request.respond(output);
  }
}

start();