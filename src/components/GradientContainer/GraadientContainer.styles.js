import styled from 'styled-components';

import { gradient, gradientPolygon } from 'theme/GlobalStyle';

export const GradientWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: -10;
`;

export const Gradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

export const GradientTop = styled(Gradient)`
    background: linear-gradient(${gradient.light}, ${gradient.medium});
    clip-path: ${gradientPolygon.top};
`;
export const GradientBottom = styled(Gradient)`
    background: linear-gradient(${gradient.light}, ${gradient.dark});
    clip-path: ${gradientPolygon.bottom};
`;
