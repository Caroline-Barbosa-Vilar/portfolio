var nodemailer = require('nodemailer');

exports.send = function(name, email, msg) {
  var transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    service: 'yahoo',
    secure: false,
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
    text: msg
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