const { userSendMessage } = require("../services/nodeMailer");



const emailsGet = async(req, res) => {
    res.json({
        msg: "emails get"
    });   
}
const emailPostUser = async(req, res) => {
    const {email, subject, text} = req.body
    //userSendMessage(subject, email, text);

    res.json({
        email,
        subject,
        text
    })
    return

}

module.exports = {
    emailsGet ,
    emailPostUser  
}