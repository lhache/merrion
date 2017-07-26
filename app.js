var express = require('express');
var app = express();
var fs = require("fs");

const appendNewLine = line => `${line}\n`

app.get('/', function (req, res) {
   console.log(res)
   res.send('/ lulz')
})

app.post('/add', function (req, res) {
  fs.appendFile(__dirname + "/" + "db", appendNewLine('data to append'), function (err) {
    if (err) throw err;
    console.log('Saved!');
    res.send('saved')
  })
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
