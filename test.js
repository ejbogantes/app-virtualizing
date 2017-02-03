//The Virtualizer
var Virtualizer = require('./server.js');
//the apps
var Apps = [{
        url: '/app1',
        folder: '/apps/app1/server'
    },
    {
        url: '/app2',
        folder: '/apps/app2/server'
    },
    {
        url: '/premflight',
        folder: '/apps/premflight/server'
    }
];
//add the apps to the Virtualizer
Virtualizer.setApps(Apps);
//set the port
Virtualizer.setPort(8082);
//start the Virtualizer
Virtualizer.start();
