(function () {
    var express         = require('express');
    var app             = module.exports = express();
    var bodyParser      =   require('body-parser');
    app.listen(3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(function (req, res, next) {
        if(res.statusCode == 200)
        {
            console.log('Status: ' + res.statusCode + ' || Message: IP ' + req.connection.remoteAddress + ' is viewing ' + req.path);
        }
        else if(res.statusCode == 404)
        {
            res.send({'status' : 404 , 'Message' : 'Page not found'});
            res.end();
        }
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });
    app.route('/', function (req, res) {
        res.send('Trang chu');
        res.end();
    });
}).call(this);