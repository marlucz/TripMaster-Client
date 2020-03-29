import React from 'react';
import styled from 'styled-components';

import { gradient, gradientPolygon } from 'theme/GlobalStyle';

const GradientWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const GradientTop = styled(Gradient)`
  background: linear-gradient(${gradient.light}, ${gradient.medium});
  clip-path: ${gradientPolygon.top};
`;
const GradientBottom = styled(Gradient)`
  background: linear-gradient(${gradient.light}, ${gradient.dark});
  clip-path: ${gradientPolygon.bottom};
`;

const GradientContainer = () => (
  <GradientWrapper>
    <GradientTop />
    <GradientBottom />
  </GradientWrapper>
);

export default GradientContainer;
