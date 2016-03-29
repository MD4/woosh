module.exports.commands = [
    'ping',
    'stats',
    'say'
]

module.exports.commands.forEach(
    (commandName) => module.exports[commandName.toUpperCase()] = require('./' + commandName)
)