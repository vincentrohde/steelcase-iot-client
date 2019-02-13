import createStore from "react-waterfall";

import orders from './Orders';
import rooms from './Rooms';

const store = {
    initialState: {
        orders,
        rooms
    },
    actionsCreators: {
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