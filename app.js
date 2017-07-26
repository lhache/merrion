var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");

var app = express();

const appendNewLine = line => `${line}\n`

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
   res.send('/ lulz')
})

app.post('/add', function (req, res) {
  fs.appendFile(__dirname + "/" + "db", appendNewLine('data to append'), function (err) {
    if (err) throw err;
    res.sendFile(__dirname + '/public/event-invitation.jpg');
  })
})

var server = app.listen(app.get('port'), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
