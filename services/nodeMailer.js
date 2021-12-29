const nodemailer = require("nodemailer");

function nodeMailer(subject, email, body) {
  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const options = {
    from: process.env.EMAIL,
    to: process.env.TO_EMAIL,
    subject: subject,

    html: `<h1>email:${email}</h1> <br> <p>${body}</p>`, // html body
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(info.response);
  });
}

module.exports = {nodeMailer};
