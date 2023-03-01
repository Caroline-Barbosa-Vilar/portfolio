var nodemailer = require('nodemailer');

var send = function(name, email, message) {
  var transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    service: 'yahoo',
    secure: true,
    auth: {
      user: 'portfolio.caroline@yahoo.com',
      pass: 'fweM3g@iUXRN'
    },
    debug: false,
    logger: true
  });

  var mailOptions = {
    from: email,
    to: 'cbarbosavilar@gmail.com',
    subject: 'Message from portfólio' + name,
    text: message
  };
  
  transporter.sendMail(mailOptions, function (error, info){
    if (error) {
      // return error.message;
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
};

module.exports = { send };