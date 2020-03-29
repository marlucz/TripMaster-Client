import styled from 'styled-components';

import { color, theme, shadow } from 'theme/GlobalStyle';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75vw;
  max-width: 50rem;
  height: 4rem;
  text-align: center;
  margin: 0 auto;
  background-color: ${({ bgColor }) => bgColor || theme.secondary};
  border: none;
  box-shadow: ${shadow.hard};
  font-family: 'Lato', sans-serif;
  color: ${color.grayLight};
  text-transform: uppercase;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(3px);
    cursor: pointer;
  }
`;

export default Button;
