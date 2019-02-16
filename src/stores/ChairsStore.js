import createStore from "react-waterfall";

const store = {
    initialState: {
        chairs: []
    },
    actionsCreators: {
        updateChairs: (prevState, actions, newState) => {
            const newChairs = newState;
            return {
                ...prevState,
                chairs: newChairs
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