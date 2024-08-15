var express = require('express');
var morgan = require('morgan');

var PORT = process.env.PORT || 8080;
var count = 0;

var app = express();

app.use(morgan('[:date[iso]] :method :url\t:status'));

app.get('/', function (req, res) {
  res.status(200).send({count: count});
});

app.put('/inc', function (req, res) {
  count += 1;
  res.status(204).end();
});

app.put('/dec', function (req, res) {
  count -= 1;
  res.status(204).end();
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);