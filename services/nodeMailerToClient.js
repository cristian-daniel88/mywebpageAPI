const res = require("express/lib/response");
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
    to: process.env.EMAIL,
    subject: "Thank you",
    html: `gracias por comunicarte`
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    res.json({
      msg: 'done'
    })
    console.log(info.response);
  });
}

module.exports = {nodeMailerToClient};
