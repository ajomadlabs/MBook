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

            Hosp.findOne({'hospname': userHosp.hospital},{'dept.deptname':1}, function (err, hosp) {

                const deptmnt = hosp;
                console.log(hosp._doc);
                res.send(deptmnt);

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

            const userHosp = await req.body;
            Hosp.aggregate([

                {"$match":{"hospname":userHosp.hospital}},
                {"$unwind":"$dept"},
                {"$match":{"dept.deptname":userHosp.department}}], function (err, hosp) {

                const doctors = hosp;
                console.log(hosp._doc);
                res.send(doctors);

            });

        } catch (err) {

            res.status(400).send({
                
                error: "Department Not Found"
                
            });

        }

    });

    // Doctor Search Route

    app.post('/doctor', async function (req, res) {

        // @TODO: Doctore Search Functionality
        try {

            const userHosp = await req.body;
            Hosp.aggregate([

                {"$match":{"hospname":userHosp.hospital}},
                {"$unwind":"$dept"},
                {"$match":{"dept.deptname":userHosp.department}},
                {"$unwind":"$dept.doctor"},
                {"$match":{"dept.doctor.docname":userHosp.docname}}], function(err, hosp) {

                    const docdetails = hosp;
                    res.send(hosp);

                });

        } catch (err) {

            res.status(400).send({
                
                error: "Doctor Not Found"
                
            });

        }

    });

    // Appointment Search Route

    app.post('/appoint', async function (req, res) {

        // @TODO: Appointment Date Search Functionality
        try {

            const userHosp = await req.body;
            Hosp.aggregate([

                {"$match":{"hospname":userHosp.hospital}},
                {"$unwind":"$dept"},
                {"$match":{"dept.deptname":userHosp.department}},
                {"$unwind":"$dept.doctor"},
                {"$match":{"dept.doctor.docname":userHosp.docname}}], function(err, hosp) {

                    const doctordate = hosp[0].dept.doctor.docdate;
                    const doctortokens = hosp[0].dept.doctor.doctokens;
                    const appointdetails = {

                        notokens: doctortokens,
                        docdate: doctordate
                        
                    }
                    res.send(appointdetails);

            })

        } catch (err) {

            res.status(400).send({
                
                error: "Doctor Not Found"
                
            });

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