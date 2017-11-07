var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app);
  port = 4000;

app.use(express.static(__dirname));

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/d3.html');
});

app.listen(port, function () {
	console.log('App listen in Port: ' + port);
});