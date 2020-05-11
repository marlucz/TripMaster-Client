import TripsActionTypes from 'store/trips/trips.types';

export const getTrips = () => ({
    type: TripsActionTypes.GET_TRIPS,
});

export const removeTrip = id => ({
    type: TripsActionTypes.REMOVE_TRIP,
    payload: { id },
});

export const addTrip = tripContent => {
    const getId = () =>
        `_${Math.random()
            .toString(36)
            .substr(2, 9)}`;

    const treatAsUTC = date => {
        const result = new Date(date);
        result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
        return result;
    };

    const getDuration = () => {
        const { startDate, endDate } = tripContent;
        const millisecondsPerDay = 24 * 60 * 60 * 1000;
        return (
            (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay
        );
    };

    const getStartsIn = () => {
        const { startDate } = tripContent;
        const millisecondsPerDay = 24 * 60 * 60 * 1000;
        return Math.ceil(
            (treatAsUTC(startDate) - treatAsUTC(Date.now())) /
                millisecondsPerDay,
        );
    };

    return {
        type: 'ADD_TRIP',
        payload: {
            trip: {
                id: getId(),
                duration: getDuration(), // better time handling by the server
                startsIn: getStartsIn(), // better time handling by the server
                ...tripContent,
            },
        },
    };
};
