7// Defining the User Schema

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    user: {
        
        id: String,
        token: String,
        email: String,
        name: String,
        curappoint: [{

            hospname: String,
            doctor: String,
            dept: String,
            mobNo: Number,
            verified: false,
            otp: Number,
            year: Number,
            month: Number,
            day: Number,
            token: Number
        }]
                
    }

});

module.exports = mongoose.model('User', userSchema);
