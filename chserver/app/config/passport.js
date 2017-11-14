var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;


var User = require('../models/user');
var configAuth = require('./auth');

module.exports = function(passport) {


	passport.serializeUser(function(user, done){

		done(null, user.id);
    
    });

	passport.deserializeUser(function(id, done){
        
        User.findById(id, function(err, user){
            
            done(err, user);
        
        });
    
    });


	passport.use('local-signup', new LocalStrategy({
        
        usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
    
    },
    
    function(req, email, password, done){
        
        process.nextTick(function(){
            
            User.findOne({'locallogin.username': email}, function(err, user){
                
                if (err)
                    return done(err);
				if (user) {
					return done(null, false, req.flash('signupMessage', 'That email already taken'));
                
                } else {
                    
                    var newUser = new User();
					newUser.locallogin.username = email;
					newUser.locallogin.password = newUser.generateHash(password);

					newUser.save(function(err){
                        
                        if (err)
							throw err;
						return done(null, newUser);
                    
                    });
				}
            
            });

		});
	}));

	passport.use('local-login', new LocalStrategy({
            
            usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
        },
        
		function(req, email, password, done){
            
            process.nextTick(function(){
				User.findOne({ 'locallogin.username': email}, function(err, user){
					if(err)
						return done(err);
					if(!user)
						return done(null, false, req.flash('loginMessage', 'No User found'));
					if(!user.validPassword(password)){
						return done(null, false, req.flash('loginMessage', 'invalid password'));
					}
					return done(null, user);

                });
                
            });
            
        }
        
	));


	passport.use(new FacebookStrategy({
        
        clientID: configAuth.facebookAuth.clientID,
	    clientSecret: configAuth.facebookAuth.clientSecret,
	    callbackURL: configAuth.facebookAuth.callbackURL
      
      },
      
      function(accessToken, refreshToken, profile, done) {
            
            process.nextTick(function(){
	    		User.findOne({'facebooklogin.id': profile.id}, function(err, user){
	    			if(err)
	    				return done(err);
	    			if(user)
	    				return done(null, user);
	    			else {
	    				var newUser = new User();
	    				newUser.facebooklogin.id = profile.id;
	    				newUser.facebooklogin.token = accessToken;
	    				newUser.facebooklogin.name = profile.name.givenName + ' ' + profile.name.familyName;
	    				newUser.facebooklogin.email = profile.emails[0].value;

	    				newUser.save(function(err){
	    					if(err)
	    						throw err;
	    					return done(null, newUser);
                        })
                        
	    				console.log(profile);
                    }
                    
                });
                
            });
            
	    }

	));


};