// Requiring the Modules

const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./app/config/db.js');
const passport = require('passport');
const flash = require('connect-flash');

// Defining the app

const app = express();

// Defining the port 

const port = process.env.PORT || 8080;

// Defining the middlewares

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({

    secret: "anyString",
    saveUninitialized: true,
    resave: true

}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.set('views', './app/views');
app.set('view engine', 'ejs');

// Require Passport config
require('./app/config/passport')(passport);

// Defining Mongoose

mongoose.connect(db.url);

// Defining Routes

require('./app/routes/index.js')(app, passport);

// Listening to port

app.listen(port);
console.log("Server Running on port:" + port);