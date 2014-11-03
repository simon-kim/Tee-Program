var http = require("http");
var fs = require("fs");
var ws = fs.createWriteStream("data.txt");

var server = http.createServer(function(req, res) {
  var stream = fs.createReadStream(__dirName + "/data.txt");
  stream.pipe(res);
});

//Thank you Hiroshi for explaining this better!
process.stdin.pipe(ws);
process.stdin.pipe(process.stdout);

/* Pipe takes care of data and end events

  setTimeout(function() {
  ws.end();
}, 1000); */

var port = process.env.PORT || 3000;
server.listen(port);
