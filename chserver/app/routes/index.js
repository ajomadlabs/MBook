// Exporting the routes

const signinRoute = require('./signin_route');

module.exports = function (app, db) {

    signinRoute(app, db);

}