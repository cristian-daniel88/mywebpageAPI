//const { userSendMessage } = require("../services/nodeMailer");

const Correo =require('../models/sendEmail')



const emailsGet = async(req, res) => {
    
    
    const {password} = req.body
    const query = {state: true};


    const {limite = 5, desde = 0, } = req.query;
   
    const [total, emails] = await Promise.all([
       
        Correo.countDocuments(query),
    
        
        Correo.find(query)
            .skip(Number(desde))
            .limit( Number(limite) )
    ]);




    if (password === process.env.BACKEND) {
        emails.reverse()
        res.json({
            total,
            emails
        });

        return
    } else {
        res.json({
            msg:'denegado'
        });
    }

 

    
}

const emailDelete =  async(req, res) => {
    const {password , id} = req.body;

    
    if (password === process.env.BACKEND) {
        
        const correo =  await Correo.findByIdAndUpdate(id , {state: false});
        res.json({
            msg: `id ${correo._id} deleted`
        });

        return
    } else {
        res.json({
            msg:'denegado'
        });
    }

 
}

const emailPostUser = async(req, res) => {
    const {email, subject, text} = req.body;
    const state = true

    const mail = new Correo({email, subject, text, state});
    
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