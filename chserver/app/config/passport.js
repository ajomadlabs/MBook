var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var User = require('../models/user');
var configAuth = require('./auth');

module.exports = function(passport) {


	passport.serializeUser(function(user, done) {
		
		//console.log(user.id);
        done(null, user.id);
        
	});

	passport.deserializeUser(function(id, done) {

		User.findById(id, function(err, user) {
			
			//console.log(user.id);
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
				
	    		User.findOne({'user.id': profile.id}, function(err, user) {

	    			if (err) {

                        return done(err);
                    
                    }
	    			if(user) {

                        return done(null, user);
                    
                    }

	    			else {

	    				var newUser = new User();
	    				newUser.user.id = profile.id;
	    				newUser.user.token = accessToken;
	    				newUser.user.name = profile.displayName;
	    				newUser.user.email = profile.emails[0].value;

	    				newUser.save(function(err) {

	    					if (err) {

                                 throw err;
                            }
							//console.log(newUser);
							return done(null, newUser);
				
                        });
                        
                    }
                    
                });
                
            });
            
	    }

	));


	


};