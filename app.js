var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
const { Client } = require('pg')

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
  const data = req.body

  const client = new Client({
    user: 'czclulqxihkkbh',
    host: 'ec2-50-19-83-146.compute-1.amazonaws.com',
    database: 'dbdn4hnl7ohqks',
    password: 'ff7d14a21d1327fa7b213de2aef267c5ef9ecb861b86e9ca83d4373740e023c1',
    port: 5432,
    ssl: true
  })

  client.connect()
  client.query('INSERT INTO attendees(firstName, lastName, email) values($1, $2, $3)',
    [data.firstName, data.lastName, data.email]);

  const line = `${data.firstName},${data.lastName},${data.email}`
  fs.appendFile(__dirname + "/" + "db", appendNewLine(line), function (err) {
    if (err) throw err;
    res.sendFile(__dirname + '/public/event-invitation.jpg');
  })
})

var server = app.listen(app.get('port'), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
