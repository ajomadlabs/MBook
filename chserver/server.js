// Importing all the modules

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const port = process.env.PORT || 8081;
const db = require('./app/config/db');

// Defining the App

const app = express();

// Defining the middlewares

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({

    extended: true

}));
app.use(session({

    secret: "anystring",
    saveUninitialized: true,
    resave: true

}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.set('views', './app/views');
app.set('view engine', 'ejs');

// Importing passport Configuration

require('./app/config/passport')(passport);

// Defining Mongoose

mongoose.connect(db.url);

// Importing the routes

require('./app/routes/index')(app, passport);

// Running Server

app.listen(port);
console.log("Server Started on " + port);