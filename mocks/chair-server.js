const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });

const chairGenerator = (idRange, xRange, yRange, bearingRange) => {
    let chair = {
        id: 0,
        x: 0,
        y: 100,
        bearing: 0
    }

    chair.id = Math.round(Math.random() * (idRange - chair.id) + chair.id);
    chair.x = Math.round(Math.random() * (xRange - chair.x) + chair.x);
    chair.y = Math.round(Math.random() * (yRange - chair.y) + chair.y);
    chair.bearing = Math.round(Math.random() * (bearingRange - chair.bearing) + chair.bearing);

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