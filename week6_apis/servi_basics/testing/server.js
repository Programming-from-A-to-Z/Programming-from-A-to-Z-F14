var servi = require('servi');
var app = new servi(true);

var concordance = useDatabase("words");

var sampleData = {
  word: 'blah',
  count: 12
};
//concordance.add(sampleData);
concordance.search('word', 'blah', checkData);
//concordance.search('word', 'blah', searchDone);
//concordance.search('word', 'blah', checkData);

function searchDone(data) {
  var record = data[0];
  console.log(record._id);

  // concordance.remove({_id: record._id}, {});
  // concordance.remove(record._id);
  
  concordance.change(record._id, {count: 15});
  concordance.update({_id: record._id}, {$set: {count: 15}}, {});  
}

function checkData(data) {
  var record = data[0];
  console.log(record._id, record.count);
}