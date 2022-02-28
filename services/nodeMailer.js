
const nodemailer = require("nodemailer");





function userSendMessage(subject, email, text) {
  const transporter = nodemailer.createTransport({
    host: "mx1.titan.email",
    port: 465,
    
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
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
