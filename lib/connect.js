// Generated by CoffeeScript 1.4.0
var fs, ssh2;

ssh2 = require('ssh2');

fs = require('fs');

module.exports = function(options, callback) {
  var connection, _ref, _ref1;
  if ((_ref = options.username) == null) {
    options.username = process.env['USER'];
  }
  if ((_ref1 = options.port) == null) {
    options.port = 22;
  }
  if (!options.password && !options.privateKey) {
    options.privateKey = fs.readFileSync("" + process.env['HOME'] + "/.ssh/id_rsa");
  }
  connection = new ssh2();
  connection.on('error', function(err) {
    return callback(err);
  });
  connection.on('ready', function() {
    return callback(null, connection);
  });
  return connection.connect(options);
};