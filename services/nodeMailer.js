
const nodemailer = require("nodemailer");





function userSendMessage(subject, email, text) {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    
  
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },

    tls: {
      ciphers:'SSLv3'
  }
  });

  const options = {
    from:process.env.EMAIL,
    to: process.env.TO_EMAIL,
    subject: `${email} dice: ${subject}`,
    text: text
  };

 
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(info.response);
  });
}

module.exports = {userSendMessage};
