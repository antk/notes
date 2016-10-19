var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('hello');
});

app.get('/data', function(req, res) {
  var data = {"key":"value"};
  var reqHeaderValue = req.get('X-custom-request-header');
  console.log(reqHeaderValue);
  if(reqHeaderValue) {
    res.set('X-custom-response-header', reqHeaderValue);
  }
  res.send(JSON.stringify(data));
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});

app.use(express.static('public'));