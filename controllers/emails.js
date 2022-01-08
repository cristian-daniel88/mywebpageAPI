const { userSendMessage } = require("../services/nodeMailer");

const Correo =require('../models/sendEmail')



const emailsGet = async(req, res) => {
    res.json({
        msg: "emails get"
    });   
}
const emailPostUser = async(req, res) => {
    const {email, subject, text} = req.body
    //userSendMessage(subject, email, text);

    const body = req.body;

    console.log(body)
    
  


    

    const correo = await Correo.findById('61d9a2ef3dadcef1df3b4c30');

    correo.emailReview.unshift(body);

    // correo.emailReview = []


   

     await Correo.findByIdAndUpdate('61d9a2ef3dadcef1df3b4c30', correo)

    res.json({
        msg: 'ok'
    })
    return
 
}

module.exports = {
    emailsGet ,
    emailPostUser  
}