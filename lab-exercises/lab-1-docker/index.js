var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

var server = app.listen(3000, function () {
  console.log('Node HelloWorld running');
});
