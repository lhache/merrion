const { Client } = require('pg')

const settings = {
  user: 'czclulqxihkkbh',
  host: 'ec2-50-19-83-146.compute-1.amazonaws.com',
  database: 'dbdn4hnl7ohqks',
  password: 'ff7d14a21d1327fa7b213de2aef267c5ef9ecb861b86e9ca83d4373740e023c1',
  port: 5432,
  ssl: true
}

module.exports = function writeDBd(data) {
  const client = new Client(settings)
  client.connect()

  client.query('INSERT INTO attendees(firstName, lastName, email) values($1, $2, $3)',
    [data.firstName, data.lastName, data.email]);
}
