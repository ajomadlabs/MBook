// Defining different Routes

const User = require('../models/user');
const Hosp = require('../models/hospitals');

module.exports = function (app, passport) {

    // Default Route

    app.get('/', function (req, res) {

        res.render('index.ejs');

    });

    // Profile Route

    app.get('/profile', isLoggedIn, async function (req, res) {

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

    app.post('/hospital', async function (req, res) {

        // @TODO: Search Hospital Functionality
        try {

            const userHosp = await req.body;
            console.log(userHosp)
           
            // Hosp.create({
            //     hospname: "MIMS",
            //     dept: [{
            //         deptname: "Test dept",
            //         doctor: [{
            //             docname: "testdoc",
            //             doctime: "10 - 4",
            //             doctokens: 50,
            //             docdate: [{
            //                 date: "test",
            //                 token: "test",
            //             }]
            //         }]
            //     }]
            // },function(err,data){
            //     console.log(err)
            //     console.log(data)
            // })
            // Hosp.findOne( function (err, data) {
            //     console.log("error",err)
            //     console.log(data)
            // })
            Hosp.find({
                'hospname': 'KIMS'
            }, function (err, hosp) {

                //console.log('Test');
                console.log(hosp)
                res.send(hosp);

            });

        } catch (err) {

            res.status(400).send({

                error: "Hospital Not Found"

            });
        }

    });

    // Department Search Route

    app.post('/department', async function (req, res) {

        // @TODO: Department Search Functionality

        try {



        } catch (err) {


        }

    });

    // Doctor Search Route

    app.post('/doctor', async function (req, res) {

        // @TODO: Doctore Search Functionality
        try {


        } catch (err) {


        }

    });

    // Appointment Search Route

    app.post('/appoint', async function (req, res) {

        // @TODO: Appointment Date Search Functionality
        try {


        } catch (err) {


        }

    });

    // View Appointment Route 

    app.post('/view', async function (req, res) {

        // @TODO: View Appointment Functionality
        try {


        } catch (err) {


        }

    });

    // Google OAuth Route

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    app.get('/auth/google/callback', passport.authenticate('google', {

            successRedirect: '/profile',
            failureRedirect: '/'
        }

    ));

    // Logout Route

    app.get('/logout', function (req, res) {

        req.logout();
        res.redirect('/');

    });

};

// Function to check if LoggedIn

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated()) {

        return next();

    } else {

        res.redirect('/');

    }

}