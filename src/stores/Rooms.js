import createStore from "react-waterfall";

const store = {
    initialState: {
        rooms: [
            {
                id: 101,
                name: 'Physik'
            },
            {
                id: 201,
                name: 'Deutsch'
            },
            {
                id: 301,
                name: 'Physik'
            }
        ]
    },
    actionsCreators: {
        add: ({rooms}, actions, newRoom) => {
            const newValue = [...rooms, newRoom];
            return {
                rooms: newValue
            }
        }
    }
};

const {
    Provider,
    Consumer,
    actions,
    getState,
    connect,
    subscribe
} = createStore(store);

export { Provider, Consumer, actions, getState, connect, subscribe };