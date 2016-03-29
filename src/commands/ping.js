//exports

module.exports = _default

// private

const symbolRes = 'PONG'

function _default(socket) {
    socket.emit(symbolRes)
}