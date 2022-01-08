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
    
    
    // const mail = new Correo(body);

    // await mail.save();


    

    // const correo = await Correo.findById('61d9b0a325987d8c93942ba4');

    // correo.emailReview.unshift(body);

   

    // await Correo.findByIdAndUpdate('61d9b0a325987d8c93942ba4', correo)

    res.json({
        msg: 'done'
    })
    return

}

module.exports = {
    emailsGet ,
    emailPostUser  
}