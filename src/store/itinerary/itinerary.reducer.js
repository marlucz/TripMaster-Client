import ItineraryActionsTypes from 'store/itinerary/itinerary.types';

const INITIAL_STATE = {
    items: [
        // {
        //     id: 1,
        //     date: '2020.04.28',
        //     hour: '10:28',
        //     name: 'Itinerary 1',
        //     location: 'Warsaw',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     status: 'done',
        // },
        // {
        //     id: 2,
        //     date: '2020.04.28',
        //     hour: '10:28',
        //     name: 'Itinerary 2',
        //     location: 'Warsaw',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     status: 'done',
        // },
        // {
        //     id: 3,
        //     date: '2020.04.28',
        //     hour: '10:28',
        //     name: 'Itinerary 3',
        //     location: 'Warsaw',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     status: 'done',
        // },
        // {
        //     id: 4,
        //     date: '2020.04.28',
        //     hour: '10:28',
        //     name: 'Itinerary 4',
        //     location: 'Warsaw',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     status: 'now',
        // },
        // {
        //     id: 5,
        //     date: '2020.04.28',
        //     hour: '10:28',
        //     name: 'Itinerary 5',
        //     location: 'Warsaw',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     status: 'next',
        // },
        // {
        //     id: 6,
        //     date: '2020.04.28',
        //     hour: '10:28',
        //     name: 'Itinerary 6',
        //     location: 'Warsaw',
        //     description:
        //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     status: 'next',
        // },
    ],
};

const itineraryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ItineraryActionsTypes.FETCH_ITINERARY_SUCCESS:
            return {
                ...state,
                itinerary: [...action.payload],
            };
        case ItineraryActionsTypes.ADD_ITINERARY_ITEM_SUCCESS:
            return {
                ...state,
                itinerary: [...state.itinerary, action.payload.data],
            };
        default:
            return state;
    }
};

export default itineraryReducer;
