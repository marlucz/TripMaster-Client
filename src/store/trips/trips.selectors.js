import { createSelector } from 'reselect';
import { sortByKey } from 'utils/selectorsUtils';

const selectTrips = state => state.trips;

export const selectAllTrips = createSelector(
    [selectTrips],
    trips => trips.items,
);

export const selectAllTripsDateAscending = createSelector(
    [selectAllTrips],
    items => sortByKey(items, 'startDate'),
);
