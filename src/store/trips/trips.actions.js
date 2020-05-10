import TripsActionTypes from 'store/trips/trips.types';

export const getTrips = () => ({
    type: TripsActionTypes.GET_TRIPS,
});

export const removeTrip = id => ({
    type: TripsActionTypes.REMOVE_TRIP,
    payload: { id },
});
