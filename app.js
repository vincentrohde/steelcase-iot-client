const express = require('express');
const cors = require('cors');
const app = express();

const StateManager = require('./src/StateManager');

app.use(cors());

app.get('/', function(req, res) {
    StateManager.getState(res);
});

app.listen(4000, function() {});