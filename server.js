var sendMail = require('./sendMail');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/index', function(req, res) {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.post('/send', function(req, res){
  console.log('teste')
  sendMail.send(req.body.name, req.body.email, req.body.message);
  res.redirect('')
});

app.listen(8080, function() {
  console.log("it's working...")
})
