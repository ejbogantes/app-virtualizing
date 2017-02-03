/**
 * Express
 */
var express = require('express'),
    app = express();

//Routing
app.use(function(req, res) {
    res.status(200);
    res.send('This is the app1');
});

//exports the app
module.exports.app = app;
