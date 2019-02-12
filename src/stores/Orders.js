import createStore from "react-waterfall";

const store = {
    initialState: {
        orders: [
            {
                id: 1,
                name: 'Quadrat',
                chairCount: 4,
                positions: []
            },
            {
                id: 2,
                name: 'Dreieck',
                chairCount: 3,
                positions: []
            },
            {
                id: 3,
                name: 'Kreis',
                chairCount: 4,
                positions: []
            },
            {
                id: 4,
                name: 'Kreuz',
                chairCount: 4,
                positions: []
            }
        ]
    },
    actionsCreators: {}
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