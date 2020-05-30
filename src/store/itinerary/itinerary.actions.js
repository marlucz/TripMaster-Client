import ItineraryActionsTypes from 'store/itinerary/itinerary.types';
import axios from 'axios';

export const fetchItinerary = slug => (dispatch, getState) => {
    dispatch({ type: ItineraryActionsTypes.FETCH_ITINERARY_REQUEST });

    return axios
        .get(`http://localhost:4000/api/trips/${slug}/itinerary`, {
            params: {
                userID: getState().user.currentUser.id,
            },
        })
        .then(({ data }) => {
            dispatch({
                type: ItineraryActionsTypes.FETCH_ITINERARY_SUCCESS,
                payload: data,
            });
        })
        .catch(err =>
            dispatch({
                type: ItineraryActionsTypes.FETCH_ITINERARY_FAILURE,
                payload: err,
            }),
        );
};

export const addItineraryItem = itemContent => (dispatch, getState) => {
    dispatch({
        type: ItineraryActionsTypes.ADD_ITINERARY_ITEM_REQUEST,
    });

    const slug = getState().trips.activeTrip;

    return axios
        .post(`http://localhost:4000/api/trips/${slug}/itinerary`, {
            userID: getState().user.currentUser.id,
            ...itemContent,
        })
        .then(payload => {
            dispatch({
                type: ItineraryActionsTypes.ADD_ITINERARY_ITEM_SUCCESS,
                payload,
            });
        })
        .catch(err => {
            dispatch({
                type: ItineraryActionsTypes.ADD_ITINERARY_ITEM_FAILURE,
                payload: err,
            });
        });
};

export const removeItineraryItem = (slug, id) => dispatch => {
    dispatch({ type: ItineraryActionsTypes.REMOVE_ITINERARY_ITEM_REQUEST });

    return axios
        .delete(`http://localhost:4000/api/trips/${slug}/itinerary/${id}`)
        .then(() => {
            dispatch({
                type: ItineraryActionsTypes.REMOVE_ITINERARY_ITEM_SUCCESS,
                payload: {
                    id,
                },
            });
        })
        .catch(err =>
            dispatch({
                type: ItineraryActionsTypes.REMOVE_ITINERARY_ITEM_FAILURE,
                payload: err,
            }),
        );
};
