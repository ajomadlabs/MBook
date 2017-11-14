// Defining the Schema

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    googlelogin: {
        
        id: String,
        token: String,
        email: String,
        name: String
                
    }

});

module.exports = mongoose.model('User', userSchema);