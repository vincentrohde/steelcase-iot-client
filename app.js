const express = require('express');
const app = express();

app.get('/state', function(req, res) {
    res.send('Give state!');
});

const server = app.listen(3000, function() {
    const port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
});