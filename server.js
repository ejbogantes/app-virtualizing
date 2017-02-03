/**
 * Express
 */
var express = require('express'),
    app = express();
/**
 * Root of the project
 *
 */
var appRoot = require('app-root-path');
/**
 * Apps
 * app.use('/app_name', require('./apps/app_folder/app').app);
 */
var _Apps = [];

/**
 * The port
 */
var _Port = 8081; //default
/**
 * [loadApps description]
 * @return {[type]} [description]
 */
function loadApps() {
    if (_Apps.length > 0) {
        for (var i = 0; i < _Apps.length; i++) {
            try {
                app.use(_Apps[i].url, require(appRoot + _Apps[i].folder).app);
            } catch (e) {
                console.log(e);
            }
        }
    } else {
        console.log("There are no registered apps");
    }
}
/**
 * Virtualizer
 */
module.exports = {
    setApps: function(Apps) {
        _Apps = Apps;
    },
    setPort: function(Port) {
        _Port = Port;
    },
    start: function() {
        loadApps();
        /**
         *  404
         */
        app.use(function(req, res) {
            res.status(404);
            res.send('The project that you are requesting does not exist');
        });
        /**
         * Listening
         */
        app.listen(_Port, function() {
            console.log('App Virtualizing running on port ' + _Port);
        });
    }
};
