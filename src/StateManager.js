const fs = require("fs");

const StateManager = (function(){

    const getState = (response) => {
        fs.readFile('state.json', (err, data) => {
            if (err) throw err;
            response.send(data);
        });
    }

    const setState = (input, response) => {
        fs.writeFile('state.json', JSON.stringify(input), function (err) {
            if (err) throw err;
            response.send('State saved!');
        });
    }

    return {
        getState,
        setState
    };
})();

module.exports = StateManager;