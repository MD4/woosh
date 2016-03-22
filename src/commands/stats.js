//exports

module.exports = _default;

// private

const symbolRes = 'STATS';

function _default(socket) {

    socket.emit(
        symbolRes,
        [
            'title',
            'version',
            'arch',
            'platform',
            'pid',
            'execPath',
            'memoryUsage',
            'hrtime',
            'uptime'
        ].reduce(
            (memo, field) => {
                var value = process[field];
                memo[field] = ((value instanceof Function) ? value() : value);
                return memo;
            },
            {}
        )
    );
    
}