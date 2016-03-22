var app = require('http').createServer();
var io = require('socket.io')(app);
var fs = require('fs');

var config = require('./config/config');

var commands = require('./commands/commands');

// exports

module.exports.start = _start;

// private

function _start() {
    app.listen(config.server.port);
    console.log('woosh server started on ws://%s:%s', config.server.host, config.server.port);
}

io.on('connection', function (socket) {
    commands.commands.forEach(
        (command) => socket.on(
            command.toUpperCase(),
            (data) => commands[command](
                socket,
                data
            )
        )
    );
});