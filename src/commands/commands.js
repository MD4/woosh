module.exports.commands = [
    'ping',
    'stats'
];

module.exports.commands.forEach(
    (commandName) => module.exports[commandName] = require('./' + commandName.toUpperCase())
);