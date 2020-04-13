import React from 'react';
import styled from 'styled-components';

import { theme, breakpoints, fontSize } from 'theme/GlobalStyle';

const HeaderWrapper = styled.header`
  margin-bottom: 1rem;
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
  text-transform: uppercase;

  @media ${breakpoints.sm} {
    margin-bottom: 1.8rem;
  }

  @media ${breakpoints.ld} {
    margin-bottom: 2rem;
  }
`;

const SubHeading = styled.span`
  font-size: ${fontSize.textSecondaryScreen};
  display: block;
  text-transform: uppercase;
  color: ${theme.secondary};

  @media ${breakpoints.sm} {
    font-size: ${fontSize.textSecondaryTablet};
  }
  @media ${breakpoints.sm} {
    font-size: ${fontSize.textSecondaryDesktop};
  }
`;

const PageHeader = ({ header, subHeader }) => (
  <HeaderWrapper>
    <Heading>
      <SubHeading>{subHeader}</SubHeading>
      {header}
    </Heading>
  </HeaderWrapper>
);

export default PageHeader;
