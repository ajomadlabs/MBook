// Defining the Schema

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({

    locallogin: {

        username: String,
        password: String

    },

    facebooklogin: {

        id: String,
        token: String,
        email: String,
        name: String
        
    }

});

userSchema.methods.generateHash = function(password) {

    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));

}

userSchema.methods.validPassword = function(password) {

    return bcrypt.compareSync(password, this.locallogin.password);

}

module.exports = mongoose.model('User', userSchema);