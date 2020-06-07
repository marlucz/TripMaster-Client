import { createSelector } from 'reselect';
import { sortByKey } from 'utils/sortByKey';

const selectTrips = state => state.trips;

export const selectAllTrips = createSelector(
    [selectTrips],
    trips => trips.items,
);

export const selectTripsIsLoading = createSelector(
    [selectTrips],
    trips => trips.isLoading,
);

export const selectAllTripsDateAscending = createSelector(
    [selectAllTrips],
    items => sortByKey(items, 'startDate'),
);

export const selectActiveTrip = createSelector(
    [selectTrips],
    trips => trips.activeTrip,
);
