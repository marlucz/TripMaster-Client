import ItineraryActionsTypes from 'store/itinerary/itinerary.types';

const INITIAL_STATE = {
    items: [],
    isLoading: false,
};

const itineraryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ItineraryActionsTypes.FETCH_ITINERARY_REQUEST:
        case ItineraryActionsTypes.ADD_ITINERARY_ITEM_REQUEST:
        case ItineraryActionsTypes.REMOVE_ITINERARY_ITEM_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case ItineraryActionsTypes.FETCH_ITINERARY_SUCCESS:
            return {
                ...state,
                items: [...action.payload],
                isLoading: false,
            };
        case ItineraryActionsTypes.ADD_ITINERARY_ITEM_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload.data],
                isLoading: false,
            };
        case ItineraryActionsTypes.REMOVE_ITINERARY_ITEM_SUCCESS:
            return {
                ...state,
                items: [
                    ...state.items.filter(
                        item => item._id !== action.payload.id,
                    ),
                ],
                isLoading: false,
            };
        default:
            return state;
    }
};

export default itineraryReducer;
