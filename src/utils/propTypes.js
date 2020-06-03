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
