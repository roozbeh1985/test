var express = require('express');
var app = express();
var http = require('http').createServer(app);
const bodyParser = require("body-parser");
var io = require('socket.io').listen(http);
app.use(bodyParser.urlencoded({extended: true}));

http.listen(80, function () {
    console.log('port 80');
});
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html", {name: 'roozbeh'});
});


io.on('connection', function (socket) {
    console.log('connect');
    socket.on('new_user',function (data) {
       console.log(data);
    });
    
    socket.on('disconnect', function () {
        console.log('disconnect');
    })

});