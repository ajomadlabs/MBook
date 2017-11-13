// Requiring all the files

const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

// Defining the port

const port = 8081;

// Defining the app

const app = express();

// Defining the db

const db = require('./app/config/config.js');

// Definig Body Parser

app.use(bodyParser.urlencoded({ extended: true }));

// Definig the MongoClient

mongoClient.connect(db.url, (err, database) => {

    if (err) return console.log(err);

    // Defining Routes

    require('./app/routes')(app, database);

    // Listening to port

    app.listen(port, () => {

        console.log(' Server Started on ' + port);

    });
});

// Testing 

// require('./app/routes')(app, {});
// app.listen(port, () => {

//     console.log('Server Started on ' + port);
    
// })