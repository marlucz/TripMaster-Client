import styled from 'styled-components';

import { breakpoints } from 'theme/GlobalStyle';

const Paragraph = styled.p`
    font-size: 1.2rem;
    word-wrap: normal;
    margin: 3px 0;

    @media ${breakpoints.md} {
        font-size: 1.6rem;
    }

    &:first-child {
        font-weight: bold;
    }
`;

export default Paragraph;
