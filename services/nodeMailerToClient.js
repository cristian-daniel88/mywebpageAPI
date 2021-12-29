const nodemailer = require("nodemailer");

function nodeMailerToClient(email) {
  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const options = {
    from: process.env.EMAIL,
    to: email,
    subject: "Thank you",
    html: `gracias por comunicarte`
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(info.response);
  });
}

module.exports = {nodeMailerToClient};
