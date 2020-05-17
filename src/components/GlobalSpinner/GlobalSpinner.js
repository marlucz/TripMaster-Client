import React from 'react';

import {
    StyledSpinnerContainer,
    StyledSpinnerOverlay,
} from 'components/GlobalSpinner/GlobalSpinner.styles';

const GlobalSpinner = () => (
    <StyledSpinnerOverlay data-testid="Spinner">
        <StyledSpinnerContainer />
    </StyledSpinnerOverlay>
);

export default GlobalSpinner;
