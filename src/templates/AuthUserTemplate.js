import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import NavBar from 'components/NavBar/NavBar';

import { breakpoints } from 'theme/GlobalStyle';

const LayoutWrapper = styled.div`
    position: relative;
`;

const Main = styled.main`
  width: 100%;
  padding: 1rem 1rem 1.5rem 1rem;
  margin: 0 auto;
  margin-top: 4.1rem;

  ${({ withTrip }) =>
      withTrip
          ? css`
                height: calc(100vh - 8rem);
            `
          : css`
                height: calc(100vh - 4.1rem);
            `}

  @media ${breakpoints.md} {
    width: 90%;
    max-width: 140rem;
    padding: 1.5rem 2rem 2rem 2rem;
    margin-top: 6rem;

    ${({ withTrip }) =>
        withTrip
            ? css`
                  height: calc(100vh - 10rem);
              `
            : css`
                  height: calc(100vh - 6rem);
              `}
  }
`;

const AuthUserTemplate = ({ children, withTrip }) => (
    <LayoutWrapper>
        <NavBar />
        <Main withTrip={withTrip}>{children}</Main>
        {withTrip && <NavBar isInTrip />}
    </LayoutWrapper>
);

AuthUserTemplate.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
        .isRequired,
    withTrip: PropTypes.bool,
};

AuthUserTemplate.defaultProps = {
    withTrip: false,
};

export default AuthUserTemplate;
