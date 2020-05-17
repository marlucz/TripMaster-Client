import React from 'react';
import PropTypes from 'prop-types';

import { StyledWrapper, PinIcon } from 'components/EditItems/EditItems.styles';

import { ReactComponent as Edit } from 'assets/icons/edit.svg';
import { ReactComponent as Delete } from 'assets/icons/delete.svg';

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
