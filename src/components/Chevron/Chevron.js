import styled from 'styled-components';

import { breakpoints } from 'theme/GlobalStyle';
import { ReactComponent as ChevronIcon } from 'assets/icons/chevron.svg';

const Chevron = styled(ChevronIcon)`
    position: absolute;
    top: 0;
    right: 2.5rem;
    width: 2rem;
    height: 2rem;

    @media ${breakpoints.md} {
        padding-top: 0.5rem;
    }

    &:hover {
        cursor: pointer;
    }

    ${({ rotate }) => (rotate ? `transform: rotate(180deg)` : ``)}
`;

export default Chevron;
