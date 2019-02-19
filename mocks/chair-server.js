const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });

const randomValue = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

const chairGenerator = (idRange, xRange, yRange, bearingRange) => {
    let chair = {
        id: 197,
        x: 0,
        y: 0,
        bearing: 0
    }

    chair.id = randomValue(chair.id, idRange);
    chair.x = randomValue(chair.x, xRange);
    chair.y = randomValue(chair.y, yRange);
    chair.bearing = randomValue(chair.bearing, bearingRange);

    return chair;
}

const mockResponse = (socket, client) => {
    const interval = setInterval(() => {
        const chair = chairGenerator(200, 1008, 1008, 360);
        console.log(chair);
        socket.send(JSON.stringify(chair));
    }, 200);

    socket.on('close', function() {
        console.log(client + ' closed the connection');
        clearInterval(interval);
    });
};

wss.on('connection', function connection(ws, req) {
    const client = req.connection.remoteAddress;

    ws.on('message', function incoming(message) {});
    mockResponse(ws, client);
});