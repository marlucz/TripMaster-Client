import styled from 'styled-components';
import Button from 'components/Button/Button';

import { theme } from 'theme/GlobalStyle';

export const StyledTagsList = styled.ul`
    height: 90%;
    list-style: none;
    overflow-y: scroll;
`;

export const StyledButton = styled(Button)`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    z-index: 10;
    flex-shrink: 0;

    &:hover {
        transform: none;
        cursor: pointer;
    }
`;

export const StyledInlinEButton = styled.button`
    display: inline;
    font-size: 2rem;
    margin-left: 1rem;
    color: ${theme.secondary};
    border: none;
    background: none;
    cursor: pointer;
`;
