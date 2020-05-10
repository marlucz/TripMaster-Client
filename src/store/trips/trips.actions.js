import TripsActionTypes from 'store/trips/trips.types';

export const getTrips = () => ({
    type: TripsActionTypes.GET_TRIPS,
});

export const removeTrip = id => ({
    type: TripsActionTypes.REMOVE_TRIP,
    payload: { id },
});

export const addTrip = tripContent => {
    const getId = () =>
        `_${Math.random()
            .toString(36)
            .substr(2, 9)}`;

    return {
        type: 'ADD_TRIP',
        payload: {
            trip: {
                id: getId(),
                ...tripContent,
            },
        },
    };
};
