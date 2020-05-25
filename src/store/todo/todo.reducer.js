import TodoActionsTypes from 'store/todo/todo.types';

const INITIAL_STATE = {
    items: [
        // {
        //     tag: 'food',
        //     list: [
        //         { name: 'sandwiches', done: false },
        //         { name: 'water', done: false },
        //     ],
        // },
        // {
        //     tag: 'bookings',
        //     list: [
        //         { name: 'Barcelona Hotel', done: true },
        //         { name: 'Budapest Hotel', done: false },
        //     ],
        // },
        // {
        //     tag: 'tickets',
        //     list: [
        //         { name: 'bus to Barcelona', done: false },
        //         { name: 'plane to Budapest', done: true },
        //     ],
        // },
        // {
        //     tag: 'clothes',
        //     list: [
        //         { name: 'pants', done: false },
        //         { name: '5 x unerwear', done: true },
        //         { name: 'sunglases', done: true },
        //     ],
        // },
    ],
};

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TodoActionsTypes.GET_TODOS:
            return {
                ...state,
                todos: state.items,
            };
        default:
            return state;
    }
};

export default todoReducer;
