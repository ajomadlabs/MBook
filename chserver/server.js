// Requiring the Modules

const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./app/config/db.js');
const passport = require('passport');
const cors = require('cors');

// Defining the app

const app = express();

// Defining the port 

const port = process.env.PORT || 8080;

// Defining the middlewares

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(session({

    secret: "anyString",
    saveUninitialized: true,
    resave: true,

}));
app.use(passport.initialize());
app.use(passport.session());

// Require Passport config
require('./app/config/passport')(passport);

// Defining Mongoose

mongoose.connect(db.url);

// Defining Routes

require('./app/routes/index')(app, passport);

// Listening to port

app.listen(port);
console.log("Server Running on port:" + port);