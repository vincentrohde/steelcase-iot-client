import createStore from "react-waterfall";

const store = {
    initialState: {
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