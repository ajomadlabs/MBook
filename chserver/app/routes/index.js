// Defining different Routes

const User = require('../models/user');
const Hosp = require('../models/hospitals');

module.exports = function(app, passport) {

    // Default Route

    app.get('/', function(req, res) {

        res.render('index.ejs');

    });

    // Profile Route

    app.get('/profile', isLoggedIn, async function(req, res) {

        try {

            const user = await req.user;
            res.send(user.toJSON());
            //console.log(user);

        } catch (err) {

            res.status(400).send({

                error: "Something Went Wrong"

            });

        }

    });

    // Hospital Search Route

    app.get('/search', function(req, res) {

        // @TODO: Search Hospital Functionality
    
    });



    // Google OAuth Route

    app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
    app.get('/auth/google/callback', passport.authenticate('google', {   
                
            successRedirect: '/profile',
            failureRedirect: '/' 
        }
            
    ));
    
    // Logout Route

    app.get('/logout', function(req, res) {

        req.logout();
        res.redirect('/');

    });

};

// Function to check if LoggedIn

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated()) {

        return next();

    }

    else {

        res.redirect('/');
        
    }

}