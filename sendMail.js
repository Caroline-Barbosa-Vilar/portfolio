var nodemailer = require('nodemailer');

exports.send = function() {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'portfolio.caroline@yahoo.com',
      pass: 'E6aGa?mN$FFS3@Z'
    }
  });

  var mailOptions = {
    from: email,
    to: 'cbarbosavilar@gmail.com',
    subject: 'Message from portfólio',
    text: msg
  };
  
  transporter.sendMail(mailOptions, function (error, info){
    if (error) {
      return error.message;
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
};