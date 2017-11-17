// Defining different Routes

const User = require('../models/user');
const Hosp = require('../models/hospitals');
const otp = require("random-number");
const request = require("request");

var options = {
    min: 999,
    max : 9999,
    integer: true

}
var userD = "";

module.exports = function (app, passport) {



    // Search Route

    app.post('/search', async function (req, res) {

        // @TODO: Search Hospital Functionality
        if (userD != "") {
            try {
                const userHosp = await req.body;
                //console.log(userD.user.email);
                Hosp.find({'hospname': {$regex:'^' + userHosp.hospital + '','$options' : 'i'}},{'hospname':1}, function (err, hosp) {

                    const deptmnt = hosp;
                    res.send(deptmnt);

                });

            } catch (err) {

                res.redirect()
            }
        }
        else {
            res.redirect('http://localhost:8081/');
        }

    });



    // Hospital Search Route

    app.post('/hospital', async function (req, res) {
        
        // @TODO: Search Hospital Functionality
        if (userD != "") {
            try {

                const userHosp = await req.body;

                Hosp.find({'hospname': userHosp.hospital},{'dept.deptname':1}, function (err, hosp) {

                    const deptmnt = hosp;
                    res.send(deptmnt);

                });

            } catch (err) {

                res.status(400).send({

                    error: "Hospital Not Found"

                });
            }
        }
        else {
            res.redirect('http://localhost:8081/');
        }
        
    });



    // Department Search Route

    app.post('/department', async function (req, res) {

        // @TODO: Department Search Functionality
        if (userD != "") {
            try {

                const userHosp = await req.body;
                Hosp.aggregate([

                    {"$match":{"hospname":userHosp.hospital}},
                    {"$unwind":"$dept"},
                    {"$match":{"dept.deptname":userHosp.department}}], function (err, hosp) {

                    const doctors = hosp;
                    res.send(doctors);

                });

            } catch (err) {

                res.status(400).send({
                    
                    error: "Department Not Found"
                    
                });

            }
        }
        else {
            res.redirect('http://localhost:8081/');
        }

    });



    // Doctor Search Route

    app.post('/doctor', async function (req, res) {

        // @TODO: Doctore Search Functionality
        if (userD != "") {
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
        }
        else {
            res.redirect('http://localhost:8081/');
        }

    });



    // Appointment Search Route

    app.post('/appoint', async function (req, res) {

        // @TODO: Appointment Date Search Functionality
        if (userD != "") {
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
        }
        else {
            res.redirect('http://localhost:8081/');
        }

    });



    // OTP Verify Route

    app.post('/mobotp', async function (req, res) {
        
        // @TODO: Appointment Date Search Functionality
        if (userD != "") {
            try {
                
                const userHosp = await req.body;
                const appointBook = {
                    
                    hospname: userHosp.hosp,
                    doctor: userHosp.doc,
                    dept: userHosp.dept,
                    token: userHosp.token,
                    mobNo: userHosp.mobno,
                    year: userHosp.year,
                    month: userHosp.month,
                    day: userHosp.date,
                    verified: userHosp.verified,
                    otp: otp(options)

                }

                sms(appointBook.mobNo,appointBook.otp);

                //console.log(appointBook);
                
                User.update({"user.email":userD.user.email},{"$push":{"user.curappoint":appointBook}},function(err, user){

                    res.send(user);

                });

            } catch (err) {

                res.status(400).send({
                    
                    error: "Booking Not Successful"
                    
                });

            }
        }
        else {
            res.redirect('http://localhost:8081/');
        }

    });



    // OTP Confirmed Route

    app.post('/otp', async function (req, res) {
        
        // @TODO: Appointment Date Search Functionality
        if (userD != "") {
            try {
                
                const userHosp = await req.body;
                const appointBook = {
                    
                    hospname: userHosp.hosp,
                    doctor: userHosp.doc,
                    dept: userHosp.dept,
                    token: userHosp.token,
                    year: userHosp.year,
                    month: userHosp.month,
                    day: userHosp.date,
                    otp: userHosp.otp,  

                }

                //console.log(appointBook);
                
                User.update({"user.email":userD.user.email, "user.curappoint.otp":userHosp.otp},{"$set":{"user.curappoint.$.verified":true}},function(err, user){

                    res.send(user);
                    console.log("Successful");

                });

            } catch (err) {

                res.status(400).send({
                    
                    error: "Booking Not Successful"
                    
                });
            }
        }
        else {
            res.redirect('http://localhost:8081/');
        }

    });



    // View Appointment Route 

    app.post('/view', async function (req, res) {

        // @TODO: View Appointment Functionality
        if (userD != "") {
            try {

                const userHosp = await req.body;

                User.findOne({"user.email":userD.user.email}, function(err, user) {

                    const appointbooks = {

                        current: user.user.curappoint

                    }

                    res.send(appointbooks);
                    //console.log(user);

                });

            } catch (err) {

                res.status(400).send({
                    
                    error: "Something went wrong"
                    
                });

            }
        }
        else {
            res.redirect('http://localhost:8081/');
        }

    });



    // Google OAuth Route

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    app.get('/auth/google/callback', passport.authenticate('google', {

            //successRedirect: 'http://localhost:8081/home',
            failureRedirect: 'http://localhost:8081'
        }

    ),function(req, res) {

        console.log('Success');
        userD = req.user;
        console.log(userD.user.email);
        console.log(req.session.passport.user);
        res.redirect('http://localhost:8081/home');

    });



};



function sms(mobno,message) {

    request.get("https://smsapi.engineeringtgr.com/send/?Mobile="+process.env.MOBNO+"&Password="+process.env.SMSPASSWORD+"&Message="+message+"&To="+mobno+"&Key="+process.env.SMSKEY+"", function(error,response,body){
        
        if (error){

            throw error;

        }

        // console.log(process.env.MOBNO);

    });
}