const localStratergy = require('passport-local').Strategy;

const User = require('../models/user');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {

        done(null, user.id);

    });

    passport.deserializeUser(function(id, done) {

        User.findById(id, function(err, user) {

            done(err, user);

        });

    });

    passport.use('local-signup', new localStratergy({

        usernameField: 'email',
        passwordField: 'password',
        passRedToCallback: true
    },
    
    function(req, email, password, done) {

        process.nextTick(function() {

            User.findOne({'locallogin.username': email}, function(err, user) {

                if (err) {

                    return done(err);

                }

                if (user) {

                    return done(null, false, req.flash('signupMessage', "This email already taken"));
                }

                else {

                    const newUser = new User();

                    newUser.locallogin.username = email;
                    newUser.locallogin.password = password;

                    newUser.save(function(err) {

                        if (err) {

                            throw err;

                        }

                        else {

                            return done(null, newUser);

                        }

                    });

                }

            });

        });

    }

    ));

    passport.use('local-login', new localStratergy({

        usernameField: 'email',
        passwordField: 'password',
        passRedToCallback: true

    },

    function(req, email, password, done) {

        process.nextTick(function() {

            User.findOne({'locallogin.username': email}, function(err) {

                if (err) {

                    return done(err);

                }

                if (!user) {

                    return done(null, false, req.flash('loginMessage', "Not a registered user"));
                
                }

                if (user.locallogin.password != password) {

                    return done(null, false, req.flash('loginMessage', "Invalid credentials"));

                }

                return done(null, user);

            });

        });

    }

    ));
    
}