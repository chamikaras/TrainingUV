var express = require('express');
var app = express();

app.get('/welcome/:name', function (req, res) {
  var username = req.params.name;
  res.send('Welcome '+username);
 
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});