var app = require('http').createServer(_httpHandler)
var io = require('socket.io')(app)

var config = require('./config/config')

var packageInfo = require('../package.json')

var commands = require('./commands/commands')

// exports

module.exports.start = _start

// private

function _start() {
    app.listen(config.server.port)
    console.log('woosh server started on ws://%s:%s', config.server.host, config.server.port)
}

function _httpHandler(req, res) {
    res.setHeader('Content-Type', 'Content-type: application/json charset=utf-8')
    res.writeHead(200)
    res.end(JSON.stringify([
        'name',
        'version',
        'author',
        'homepage',
        'repository',
        'bugs',
        'license'
    ].reduce(
        (memo, field) => {
            memo[field] = packageInfo[field]
            return memo
        },
        {}
    )))
}

io.on('connection', function (socket) {
    commands.commands.forEach(
        (command) => socket.on(
            command.toUpperCase(),
            (data) => commands[command.toUpperCase()](
                socket,
                data
            )
        )
    )
})