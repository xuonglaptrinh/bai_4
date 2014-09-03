'use strict';
var http = require('http'),
    fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200);

    var newfile = fs.createWriteStream('myfile.txt');

    req.on('data', function(chunk) {

        newfile.write(chunk);

    });

    req.on('end', function() {

        res.end('Uploaded!');

    });

}).listen(8080);

