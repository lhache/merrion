const nodemailer = require('nodemailer');

const settings = {
  host: 'ssl0.ovh.net',
  port: 465,
  secure: true,
  auth: {
      user: 'bonjour@brandconnection.fr',
      pass: 'bonjourbonjour'
  }
}

module.exports = function sendEmail(data) {
  let transporter = nodemailer.createTransport(settings);

  const mailOptions = {
      from: '"Brand Connection" <bonjour@brandconnection.fr>',
      to: data.email,
      subject: 'You are invited ✔',
      text: `
  Congratulations ${data.firstName},

  you are now registered on the V.I.P guests list for the sale at the Merrion Hotel on September, 16th 2017.

  We are looking forward to seeing you!

  Brand Connection Team`,
      attachments: [
        { path: 'https://afternoon-beyond-18819.herokuapp.com/event-invitation.jpg' }
      ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
      error && console.log(error);
  });
}
