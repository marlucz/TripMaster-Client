const initialState = {
    trips: [
        {
            id: 1,
            name: 'Budapest',
            startDate: '20.04.2020',
            endDate: '25.04.2020',
            duration: 5,
            startsIn: 9,
        },
        {
            id: 2,
            name: 'Warsaw',
            startDate: '20.04.2020',
            endDate: '25.04.2020',
            duration: 5,
            startsIn: 9,
        },
        {
            id: 3,
            name: 'Berlin',
            startDate: '20.04.2020',
            endDate: '25.04.2020',
            duration: 5,
            startsIn: 9,
        },
        {
            id: 4,
            name: 'New York',
            startDate: '20.04.2020',
            endDate: '25.04.2020',
            duration: 5,
            startsIn: 9,
        },
        {
            id: 5,
            name: 'Las Vegas',
            startDate: '20.04.2020',
            endDate: '25.04.2020',
            duration: 5,
            startsIn: 9,
        },
        {
            id: 6,
            name: 'Delhi',
            startDate: '20.04.2020',
            endDate: '25.04.2020',
            duration: 5,
            startsIn: 9,
        },
        {
            id: 7,
            name: 'Dubai',
            startDate: '20.04.2020',
            endDate: '25.04.2020',
            duration: 5,
            startsIn: 9,
        },
        {
            id: 8,
            name: 'Crete',
            startDate: '20.04.2020',
            endDate: '25.04.2020',
            duration: 5,
            startsIn: 9,
        },
        {
            id: 9,
            name: 'Dubrovnik',
            startDate: '20.04.2020',
            endDate: '25.04.2020',
            duration: 5,
            startsIn: 9,
        },
    ],
};

const rootReducer = (state = initialState, action) => {
    console.log(state, action);
};

export default rootReducer;
