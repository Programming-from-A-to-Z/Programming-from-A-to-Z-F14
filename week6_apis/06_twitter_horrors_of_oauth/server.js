var servi = require('servi');
var app = new servi(true);

var Twit = require('twit');
var T = new Twit({
  consumer_key:         'NoHVG58q9xCW4pnfhWNCRYVMm', 
  consumer_secret:      'HoVfSTD7xM8ev7kzHzxrkGX89g730NZZpKuMZ8o07sVi1e31MQ',
  access_token:         '2799041194-T57H5oIei64ZOzEUA10r4zrwEYRqJgUpLpCRcjt',
  access_token_secret:  'm1mjy9EfCy8BfNA4IVAQwAv1UWsp0WmmRbzhJ4QCzNCNX'
});

port(8080);

serveFiles("public");

// var names = useDatabase("tweets");

route('/tweets', getTweets);

function getTweets(request) {
  T.get('search/tweets', { q: 'JavaScript', count: 10 }, function(err, data, response) {
    var tweets = data.statuses;
    console.log('Got ' + tweets.length + ' tweets.');
    request.respond(JSON.stringify(tweets));
  });  
}

start();