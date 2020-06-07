/* eslint no-param-reassign: 0 */

import { createSelector } from 'reselect';
import { sortByKey } from 'utils/sortByKey';

const selectItinerary = state => state.itinerary;

export const selectAllItinerary = createSelector(
    [selectItinerary],
    itinerary => itinerary.items,
);
export const selectItineraryIsLoading = createSelector(
    [selectItinerary],
    itinerary => itinerary.isLoading,
);

export const selectAllItineraryDateAscending = createSelector(
    [selectAllItinerary],
    items => {
        const sorted = sortByKey(items, 'startDate');
        const dateNow = new Date(Date.now());

        for (let i = 0; i < sorted.length; i++) {
            if (new Date(sorted[i].startDate) > dateNow) {
                sorted[i].status = 'next';
            } else if (
                i > 0 &&
                new Date(sorted[i].startDate) >
                    new Date(sorted[i - 1].startDate) &&
                dateNow >= new Date(sorted[i].startDate) &&
                dateNow <= new Date(sorted[i + 1].startDate)
            ) {
                sorted[i].status = 'now';
            } else {
                sorted[i].status = 'done';
            }
        }
        return sorted;
    },
);
