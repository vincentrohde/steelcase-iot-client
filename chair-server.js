const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });

const chairs = [
    {
        id: 1,
        x: 0,
        y: 0,
        bearing: 90
    },
    {
        id: 2,
        x: 200,
        y: 200,
        bearing: 90
    },
    {
        id: 3,
        x: 300,
        y: 300,
        bearing: 90
    }
];

const mockResponse = (socket) => {
    let i = 0;

    while(i < 3) {
        chairs.forEach(chair => {
            chair.bearing += 20;
            socket.send(JSON.stringify(chair));
        });
        i++;
    }
};

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {});

    mockResponse(ws);
});