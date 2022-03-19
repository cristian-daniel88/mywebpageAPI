
const nodemailer = require("nodemailer");





function userSendMessage(subject, email, text) {
  const transporter = nodemailer.createTransport({
    // host: "smtp.titan.email",
    // port: 465,
    // secure:'true',
    host:"imap.cristianherreradev.co.uk",
    port:993,
    secure:false,

    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const options = {
    from:process.env.EMAIL,
    to: process.env.EMAIL,
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
