import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as PinDone } from 'assets/icons/pin-done.svg';
import { ReactComponent as PinNow } from 'assets/icons/pin-now.svg';
import { ReactComponent as PinNext } from 'assets/icons/pin-next.svg';

import { StyledPinIcon } from 'components/PinIcon/PinIcon.styles';

const PinIcon = ({ status, inList }) => (
    <StyledPinIcon status={status} inList={inList}>
        {status === 'done' && <PinDone />}
        {status === 'now' && <PinNow />}
        {status === 'next' && <PinNext />}
    </StyledPinIcon>
);

PinIcon.propTypes = {
    status: PropTypes.string.isRequired,
    inList: PropTypes.bool,
};

PinIcon.defaultProps = {
    inList: false,
};

export default PinIcon;
