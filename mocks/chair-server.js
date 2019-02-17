const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });

const randomValue = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

const chairGenerator = (idRange, xRange, yRange, bearingRange) => {
    let chair = {
        id: 0,
        x: 0,
        y: 100,
        bearing: 0
    }

    chair.id = randomValue(chair.id, idRange);
    chair.x = randomValue(chair.x, xRange);
    chair.y = randomValue(chair.y, yRange);
    chair.bearing = randomValue(chair.bearing, bearingRange);

    return chair;
}

const mockResponse = (socket) => {
    const interval = setInterval(() => {
        socket.send(JSON.stringify(chairGenerator(3, 500, 500, 360)));
    }, 500);

    socket.on('close', function() {
        clearInterval(interval);
    });
};

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {});
    mockResponse(ws);
});