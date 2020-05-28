import { createSelector } from 'reselect';
import { sortByKey } from 'utils/selectorsUtils';

const selectItinerary = state => state.itinerary;

export const selectAllItinerary = createSelector(
    [selectItinerary],
    itinerary => itinerary.items,
);

export const selectAllitineraryDateAscending = createSelector(
    [selectAllItinerary],
    items => sortByKey(items, 'startDate'),
);
