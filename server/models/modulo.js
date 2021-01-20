const mongoose = require('mongoose');

//const uniqueValidator = require('mongoose-unique-validator');
/* let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
} */

let Schema = mongoose.Schema;

let moduloSchema = new Schema({
    numModulo: {
        type: String,
        required: [true, 'El mumero de módulo es necesario' ]
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario' ]
    }
});

/* usuarioSchema.method.toJSON = function (){
    let user = this;
    let userObjetc = user.toObject();
    delete userObjetc.password;

    return userObjetc;
}

usuarioSchema.plugin( uniqueValidator, {message: '{PATH} debe de ser unico'}) */

module.exports = mongoose.model( 'Modulo', moduloSchema);