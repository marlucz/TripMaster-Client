import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { breakpoints, theme } from 'theme/GlobalStyle';
import { ReactComponent as Edit } from 'assets/icons/edit.svg';
import { ReactComponent as Delete } from 'assets/icons/delete.svg';

const StyledWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @media ${breakpoints.md} {
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
`;

const PinIcon = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    svg {
        width: 2rem;
        height: 2rem;
        margin: 2px;

        path {
            ${({ color }) =>
                color &&
                css`
                    fill: ${theme[color]};
                `}
        }

        @media ${breakpoints.ld} {
            width: 2.5rem;
            height: 2.5rem;
            margin: 0.5rem;
        }
    }
`;

const EditItems = ({ handleClickRemove, handleClickEdit }) => (
    <StyledWrapper>
        <PinIcon color="primary" onClick={handleClickEdit}>
            <Edit />
        </PinIcon>
        <PinIcon color="secondary" onClick={handleClickRemove}>
            <Delete />
        </PinIcon>
    </StyledWrapper>
);

EditItems.propTypes = {
    handleClickEdit: PropTypes.func,
    handleClickRemove: PropTypes.func,
};

EditItems.defaultProps = {
    handleClickEdit: null,
    handleClickRemove: null,
};

export default EditItems;
