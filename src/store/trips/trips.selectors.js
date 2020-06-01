import { createSelector } from 'reselect';
import { sortByKey } from 'utils/sortByKey';

const selectTrips = state => state.trips;

export const selectAllTrips = createSelector(
    [selectTrips],
    trips => trips.items,
);

export const selectAllTripsDateAscending = createSelector(
    [selectAllTrips],
    items => sortByKey(items, 'startDate'),
);

export const selectActiveTrip = createSelector(
    [selectTrips],
    trips => trips.activeTrip,
);

export const selectActiveTripObject = createSelector([selectTrips], trips =>
    trips.items.filter(trip => {
        return trip.slug === trips.activeTrip;
    }),
);
