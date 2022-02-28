const { userSendMessage } = require("../services/nodeMailer");

const Correo = require("../models/sendEmail");

const emailsGet = async (req, res) => {
  const { password } = req.body;
  const query = { state: true };

  let last5 =  await (await Correo.find({state : true})).length ;
  let largo =  await (await Correo.find({state : true})).length ;

  if(last5 < 5) {
    last5 = 0
  } else {
    last5 = last5 - 5
  }


  const { limite = (largo + 1), desde = last5 } = req.query;

  const [total, emails] = await Promise.all([
    Correo.countDocuments(query),

    (await Correo.find(query).skip(Number(desde)).limit(Number(limite))).reverse(),
  ]);

  if (password === process.env.BACKEND) {
    
    
    res.json({
      total,
      emails 
    });

    return;
  } else {
    res.json({
      msg: "denegado",
    });
  }
};

const emailDelete = async (req, res) => {
  const { password, id } = req.body;

  if (password === process.env.BACKEND) {
    const correo = await Correo.findByIdAndUpdate(id, { state: false });
    res.json({
      msg: `id ${correo._id} deleted`,
    });

    return;
  } else {
    res.json({
      msg: "denegado",
    });
  }
};

const emailPostUser = async (req, res) => {
  // Date
  let date_ob = new Date();

  // current date
  // adjust 0 before single digit date
  let date = ("0" + date_ob.getDate()).slice(-2);

  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  // current year
  let year = date_ob.getFullYear();

  // current hours
  let hours = date_ob.getHours();

  // current minutes
  let minutes = date_ob.getMinutes();

  // current seconds
  let seconds = date_ob.getSeconds();

  // fecha
  let fecha =
    date +
    "-" +
    month +
    "-" +
    year +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  //
  const { email, subject, text } = req.body;
  const state = true;

  const mail = new Correo({ email, subject, text, state, fecha });

  userSendMessage(subject, email, text);

  await mail.save();

  res.json({
    msg: "done",
  });
  return;
};

module.exports = {
  emailsGet,
  emailPostUser,
  emailDelete,
};
