import TripsActionsTypes from 'store/trips/trips.types';
import axios from 'axios';

export const fetchTrips = () => (dispatch, getState) => {
    dispatch({ type: TripsActionsTypes.FETCH_TRIPS_REQUEST });
    return axios
        .get('http://localhost:3000/api/trips', {
            params: {
                userID: getState().user.userID,
            },
        })
        .then(payload =>
            dispatch({ type: TripsActionsTypes.FETCH_TRIPS_SUCCESS, payload }),
        )
        .catch(err =>
            dispatch({
                type: TripsActionsTypes.FETCH_TRIPS_FAILURE,
                payload: err,
            }),
        );
};

export const removeTrip = id => ({
    type: TripsActionsTypes.REMOVE_TRIP,
    payload: { id },
});

export const addTrip = tripContent => (dispatch, getState) => {
    dispatch({ type: TripsActionsTypes.ADD_TRIP });

    return axios
        .post('https://localhost:3000/api/trips', {
            userID: getState().userID,
            ...tripContent,
        })
        .then(({ trip }) => {
            dispatch({
                type: TripsActionsTypes.ADD_TRIP_SUCCESS,
                payload: trip,
            });
        })
        .catch(err => {
            dispatch({
                type: TripsActionsTypes.ADD_TRIP_FAILURE,
                payload: err,
            });
        });
};
