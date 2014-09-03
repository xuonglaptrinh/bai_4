'use strict';

var http = require('http'),
    fs = require('fs');

http.createServer(function(req, res) {

   res.writeHead(200);

   var newfile = fs.createWriteStream('myfile1.txt');

   req.pipe(newfile);

   req.on('end', function() {

      res.end('Uploaded!');

   });

}).listen(8080);
