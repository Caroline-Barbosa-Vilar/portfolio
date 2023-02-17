var express = require('express');
var app = express();
var path = require('path');
var sendMail = require('./sendMail');

app.use(express.static('public'));

app.get('/index', function(req, res) {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get('/send', function(req, res){
  sendMail.send(req.query.name, req.query.email, req.query.msg);
  // res.redirect('')
});

app.listen(8080, function() {
  console.log("it's working...")
})