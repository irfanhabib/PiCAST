var sys = require('sys');
var exec = require('child_process').exec;
var express = require('express');
var _ = require('lodash');
var app = express();


// check if environment variables are set
// var env = {};
 var   env = process.env;


app.get('/', function (req, res) {
    res.send('Welcome to PiCAST 3! In the URL, type what you want to do...');
});

app.get('/yt-stream/:url', function (req, res) {
    res.send('Streaming YouTube Video...');
    console.log('Playing: ' + "livestreamer --player=mplayer https://www.youtube.com/watch?v=" + req.params.url + " best");
    exec("livestreamer --player=mplayer https://www.youtube.com/watch?v=" + req.params.url + " best", {env: env},
        function(error, stdout, stderr){
        console.log(error, stdout, stderr)
    });
});

// Setup PiCAST Server
var srv = app.listen(3000, function () {
    var host = srv.address().address;
    var port = srv.address().port;

    console.log('Access at http://%s:%s', host, port);
});
