import styled from 'styled-components';

export const StyledTime = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    @media screen and (min-width: 1024px) and (orientation: landscape),
        (min-width: 1200px) {
        align-items: flex-start;
    }
`;
