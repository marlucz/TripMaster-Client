/* eslint no-param-reassign: 0 */

import { createSelector } from 'reselect';
import { sortByKey } from 'utils/sortByKey';

const selectItinerary = state => state.itinerary;

export const selectAllItinerary = createSelector(
    [selectItinerary],
    itinerary => itinerary.items,
);

export const selectAllitineraryDateAscending = createSelector(
    [selectAllItinerary],
    items => {
        const sortedItems = sortByKey(items, 'startDate');
        const dateNow = new Date(Date.now());

        sortedItems.forEach((item, i) => {
            if (new Date(item.startDate) > dateNow) {
                item.status = 'next';
            } else if (
                i > 0 &&
                new Date(item.startDate) >= dateNow &&
                new Date(item.startDate) > new Date(item[i - 1].startDate)
            ) {
                item.status = 'now';
            } else {
                item.status = 'done';
            }
        });
        return sortedItems;
    },
);
