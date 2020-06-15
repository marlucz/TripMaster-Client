import PropTypes from 'prop-types';

export const ItineraryItemPropTypes = PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
    ]).isRequired,
    location: PropTypes.shape({
        address: PropTypes.string,
        coordinates: PropTypes.array,
    }).isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
});

export const TripsItemPropTypes = PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    startDate: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
    ]).isRequired,
    endDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
    duration: PropTypes.number.isRequired,
    startsIn: PropTypes.number.isRequired,
    location: PropTypes.shape({
        coordinates: PropTypes.arrayOf(PropTypes.number),
        address: PropTypes.string,
    }),
});

export const ExpenseItemPropTypes = PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
    hour: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.number.isRequired,
    currency: PropTypes.string,
});
