var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var User = require('../models/user');
var configAuth = require('./auth');

module.exports = function(passport) {


	passport.serializeUser(function(user, done) {

        done(null, user.id);
        
	});

	passport.deserializeUser(function(id, done) {

		User.findById(id, function(err, user) {

            done(err, user);
            
        });
        
	});

	passport.use(new GoogleStrategy({

	    clientID: configAuth.googleAuth.clientID,
	    clientSecret: configAuth.googleAuth.clientSecret,
        callbackURL: configAuth.googleAuth.callbackURL
        
      },
      
	  function(accessToken, refreshToken, profile, done) {

	    	process.nextTick(function() {

	    		User.findOne({'googlelogin.id': profile.id}, function(err, user) {

	    			if (err) {

                        return done(err);
                    
                    }
	    			if(user) {

                        return done(null, user);
                    
                    }

	    			else {

	    				var newUser = new User();
	    				newUser.googlelogin.id = profile.id;
	    				newUser.googlelogin.token = accessToken;
	    				newUser.googlelogin.name = profile.displayName;
	    				newUser.googlelogin.email = profile.emails[0].value;

	    				newUser.save(function(err) {

	    					if (err) {

                                 throw err;
                            }

	    					return done(null, newUser);
                        });
                        
	    				console.log(profile);
                    }
                    
                });
                
            });
            
	    }

	));


	


};