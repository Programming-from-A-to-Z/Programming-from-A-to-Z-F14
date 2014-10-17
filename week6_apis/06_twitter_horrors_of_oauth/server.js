var servi = require('servi');
var app = new servi(true);

var Twit = require('twit');
var T = new Twit({
  consumer_key:         '_', 
  consumer_secret:      '_',
  access_token:         '_',
  access_token_secret:  '_'
});

port(8080);

serveFiles("public");

// var names = useDatabase("tweets");

route('/tweets', error);

function error(request) {
  var error = {
    error: 'you forgot to specify a query'
  };
  request.respond(JSON.stringify(error));
}

route('/tweets/:query', getTweets);

function getTweets(request) {
  console.log(request.params);
  var query = request.params.query;
  T.get('search/tweets', { q: query, count: 10 }, function(err, data, response) {
    var tweets = data.statuses;
    console.log('Got ' + tweets.length + ' tweets.');
    request.respond(JSON.stringify(tweets, undefined, 2));
  });  
}

route('/tweet', postTweet)

function postTweet(request) {
  var statement = request.params.status;
  T.post('statuses/update', { status: statement}, function(err, reply) {
    if (err !== null) {
      request.respond(JSON.stringify(err));
    } else {
      request.respond(JSON.stringify(reply));
    }
  });

}

start();