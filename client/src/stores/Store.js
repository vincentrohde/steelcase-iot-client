import createStore from "react-waterfall";

const store = {
    initialState: {
        chairs: [],
        orders: [],
        rooms: []
    },
    actionsCreators: {
        addState: (prevState, actions, newState) => {
            const newOrders = newState.orders;
            const newRooms = newState.rooms;

            // TODO: Dynamically generate state
            // {...prevState, newState}
            return {
                ...prevState,
                orders: newOrders,
                rooms: newRooms
            }
        },
        addRoom: (prevState, actions, newRoom) => {
            const { rooms } = prevState;
            const newValue = [...rooms, newRoom];
            return {
                ...prevState,
                rooms: newValue
            }
        },
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