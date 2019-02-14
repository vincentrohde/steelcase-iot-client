const express = require('express');
const app = express();

const StateManager = require('./src/StateManager');

app.get('/', function(req, res) {
    StateManager.getState(res);
});

const server = app.listen(3000, function() {
    const port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
});