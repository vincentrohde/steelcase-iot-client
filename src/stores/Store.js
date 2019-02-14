import createStore from "react-waterfall";

const store = {
    initialState: {
        orders: [],
        rooms: [
            {
                id: 501,
                name: 'Sport',
                orders: [1, 2, 3]
            }
        ]
    },
    actionsCreators: {
        addState: (prevState, actions, newState) => {
            const newOrders = newState.orders;
            const newRooms = newState.rooms;

            // let updatedState = {...prevState};
            // const properties = Object.keys(newState);
            // properties.forEach(property => {
            //     property = newState[property];
            //     updatedState = {...updatedState, newState[property]};
            // });

            // TODO: Dynamically generate state
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