//exports

module.exports = _default;

// private

const symbolRes = 'SAY';

function _default(socket, data) {

    socket.emit(
        symbolRes,
        {saying: data.text}
    );
    
}