const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const StateManager = require('./src/StateManager');

app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res) {
    StateManager.getState(res);
});

app.post('/', function (req, res) {
    StateManager.setState(req.body, res);
});

app.listen(4000, function() {});