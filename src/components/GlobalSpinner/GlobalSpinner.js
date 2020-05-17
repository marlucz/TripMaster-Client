import React from 'react';

import {
    StyledSpinnerContainer,
    StyledSpinnerOverlay,
} from 'components/GlobalSpinner/GlobalSpinner.styles';

const GlobalSpinner = () => (
    <StyledSpinnerOverlay>
        <StyledSpinnerContainer />
    </StyledSpinnerOverlay>
);

export default GlobalSpinner;
