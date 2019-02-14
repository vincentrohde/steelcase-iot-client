const fs = require("fs");

const StateManager = (function(){

    const getState = (response) => {
        fs.readFile('state.json', (err, data) => {
            if (err) throw err;
            response.send(data);
        });
    }

    return {
        getState
    };
})();

module.exports = StateManager;