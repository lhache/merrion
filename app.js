var express = require('express');
var app = express();
var fs = require("fs");

const appendNewLine = line => `${line}\n`

app.use(express.static('public'))

app.get('/', function (req, res) {
   res.send('/ lulz')
})

app.post('/add', function (req, res) {
  fs.appendFile(__dirname + "/" + "db", appendNewLine('data to append'), function (err) {
    if (err) throw err;
    res.send('saved')
  })
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
