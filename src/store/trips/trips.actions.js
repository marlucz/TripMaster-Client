import TripsActionsTypes from 'store/trips/trips.types';
import axios from 'axios';

export const fetchTrips = () => (dispatch, getState) => {
    dispatch({ type: TripsActionsTypes.FETCH_TRIPS_REQUEST });
    return axios
        .get('http://localhost:4000/api/trips', {
            params: {
                userID: getState().user.currentUser.id,
            },
        })
        .then(({ data }) => {
            dispatch({
                type: TripsActionsTypes.FETCH_TRIPS_SUCCESS,
                payload: data,
            });
        })
        .catch(err =>
            dispatch({
                type: TripsActionsTypes.FETCH_TRIPS_FAILURE,
                payload: err,
            }),
        );
};

export const addTrip = tripContent => (dispatch, getState) => {
    dispatch({
        type: TripsActionsTypes.ADD_TRIP_REQUEST,
    });

    return axios
        .post('http://localhost:4000/api/trips', {
            userID: getState().user.currentUser.id,
            ...tripContent,
        })
        .then(payload => {
            dispatch({
                type: TripsActionsTypes.ADD_TRIP_SUCCESS,
                payload,
            });
        })
        .catch(err => {
            dispatch({
                type: TripsActionsTypes.ADD_TRIP_FAILURE,
                payload: err,
            });
        });
};

export const removeTrip = id => dispatch => {
    dispatch({ type: TripsActionsTypes.REMOVE_TRIP_REQUEST });

    return axios
        .delete(`http://localhost:4000/api/trips/${id}`)
        .then(() => {
            dispatch({
                type: TripsActionsTypes.REMOVE_TRIP_SUCCESS,
                payload: {
                    id,
                },
            });
        })
        .catch(err =>
            dispatch({
                type: TripsActionsTypes.REMOVE_TRIP_FAILURE,
                payload: err,
            }),
        );
};

export const setCurrentActiveTrip = slug => dispatch => {
    dispatch({ type: TripsActionsTypes.SET_ACTIVE_TRIP, payload: slug });
};
