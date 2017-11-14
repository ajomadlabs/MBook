// Defininf the Schema

const mongoose = require('mongoose');
const userSchema = mongoose.Schema({

    locallogin: {

        username: String,
        password: String

    }

});

module.exports = mongoose.model('User', userSchema);