var fs = require('fs');
var net = require('net');

fs.readFile('./golf.txt', function (err, str) {
  console.log(str.toString());

  var client = new net.Socket();
  client.setEncoding('utf8');
  client.connect({
    port: 16467,
    host: 'pal064-dev.ad.pvt'
  });

  client.on('connect', function () {
    console.log('Client: connection established with server');

    client.write(str.toString());

    console.log('data written');
    client.end();
  });
});

