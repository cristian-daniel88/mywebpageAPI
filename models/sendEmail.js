const {Schema, model } = require('mongoose');


const CorreoSchema = Schema({

    email: {
        type: String
    },

    subject: {
        type: String
    },

    text: {
        type: String
    },

    state: {
        type: Boolean,
        default: true,
        required: true
    },

    fecha : {
        type: String,
    }
 

});

CorreoSchema.methods.toJSON = function() {
    const { __v,  _id, ...email  } = this.toObject();
    email.uid = _id
    return email;
    
}




module.exports = model('Correo' , CorreoSchema);