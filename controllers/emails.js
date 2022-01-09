//const { userSendMessage } = require("../services/nodeMailer");

const Correo =require('../models/sendEmail')



const emailsGet = async(req, res) => {

    
    const emails = await Correo.find();
    
    const emailsReverse = emails.reverse()
    
    const {password} = req.body;

    if (password === process.env.BACKEND) {
        
        res.json({
            emailsReverse   
        });   
    }

    res.json({
        msg: 'no'
    })
    


    
}

const emailDelete =  async(req, res) => {
    res.json({
        msg: "delete"
    });   
}

const emailPostUser = async(req, res) => {
    const {email, subject, text} = req.body;

    const mail = new Correo({email, subject, text});
    
    //userSendMessage(subject, email, text);

    await mail.save();
    
    
    res.json({
        msg: 'done'
    })
    return

}

module.exports = {
    emailsGet ,
    emailPostUser,
    emailDelete  
}