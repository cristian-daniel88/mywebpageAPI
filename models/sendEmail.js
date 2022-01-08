const {Schema, model } = require('mongoose');


const CorreoSchema = Schema({


    emailReview:[]
 

});

CorreoSchema.methods.toJSON = function() {
    const { __v,  _id, ...email  } = this.toObject();
    email.uid = _id
    return email;
    
}




module.exports = model('Correo' , CorreoSchema);