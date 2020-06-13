import styled from 'styled-components';
import { Form } from 'formik';

import Button from 'components/Button/Button';
import LocationSearchInput from 'components/LocationSearchInput/LocationSearchInput';

import { color, shadow } from 'theme/GlobalStyle';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 2rem;
`;

export const StyledForm = styled(Form)`
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 50rem;
`;

export const StyledInput = styled.input`
    display: block;
    font-family: inherit;
    font-size: 1.6rem;
    width: 100%;
    margin-top: 1rem;
    padding: 1.2rem 2rem;
    background-color: rgba(${color.grayLight}, 0.8);
    box-shadow: ${shadow.light};
    border: none;
    color: ${color.grayDark};

    &::placeholder {
        text-transform: capitalize;
    }
`;

export const StyledSelect = styled.select`
    display: block;
    font-family: inherit;
    font-size: 1.6rem;
    width: 100%;
    margin-top: 1rem;
    padding: 1.2rem 2rem;
    background-color: rgba(${color.grayLight}, 0.8);
    box-shadow: ${shadow.light};
    border: none;
    color: ${color.grayDark};

    &::placeholder {
        text-transform: capitalize;
    }
`;

export const StyledTextArea = styled(StyledInput)`
    height: 15vh;
    resize: none;

    @media (min-width: 360px) {
        height: 20vh;
    }
`;

export const StyledDateInput = styled(StyledInput)`
    &:before {
        content: attr(placeholder) !important;
        color: ${color.grayDark};
        margin-right: 0.5em;
    }

    &:focus:before {
        content: '';
    }
    &:valid:before {
        content: '';
    }
`;

export const StyledButton = styled(Button)`
    margin: 1rem auto;
    margin-top: auto;
    z-index: 10;
    flex-shrink: 0;

    &:hover {
        transform: none;
        cursor: pointer;
    }
`;

export const StyledLocationSearchInput = styled(LocationSearchInput)`
    width: 100%;
`;

export const StyledRowInputsWrapper = styled.div`
    display: flex;
    width: 100%;
`;
