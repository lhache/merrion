var express = require('express');
var bodyParser = require('body-parser');
const writeDB = require('./scripts/db')
const sendEmail = require('./scripts/email')

var app = express();
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
   res.send('')
})

app.post('/add', function (req, res) {
  const data = req.body

  writeDB(data)
  sendEmail(data)

  res.sendFile(__dirname + '/public/event-invitation.jpg');
})

var server = app.listen(app.get('port'), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
