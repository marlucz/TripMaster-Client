import { createGlobalStyle } from 'styled-components';

export const color = {
  white: '#FFFFFF',
  black: '#002535',
  grayDark: '#707B84',
  grayLight: '#F6F8F5',
};

export const theme = {
  primary: '#05A859',
  secondary: '#F15E4C',
};

export const gradient = {
  light: '#D8E6C5',
  medium: '#008884',
  dark: '#007B76',
};

const shadows = {
  hard: `rgba(0,0,0, 0.8)`,
  light: `rgba(0,0,0,0.3)`,
};

export const shadow = {
  hard: `2px 2px 4px ${shadows.hard}`,
  light: `0 0 5px ${shadows.light}`,
};

export const fontFamily = {
  main: `'Lato', sans-serif`,
  logo: `'Mr Dafoe', cursive`,
};

export const fontSize = {
  textSecondaryScreen: '1.2rem',
  textPrimaryScreen: '1.4rem',

  textSecondarytablet: '1.3rem',
  textPrimaryTablet: '1.6rem',

  textSecondaryDesktop: '1.4rem',
  textPrimaryDesktop: '1.7rem',
};

export const breakpoints = {
  sm: `(min-width: 576px)`,
  md: `(min-width: 768px)`,
  ld: `(min-width: 992px)`,
  xld: `(min-width: 1200px)`,
};

export const gap = {
  small: ` 5px`,
  medium: `1rem`,
  $ig: `2rem`,
};

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
    }

    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    img {
        max-width: 100%;
    }

    body {
        font-size: ${fontSize.textPrimaryScreen};
        font-family: ${fontFamily.main};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${color.black};
        overflow: hidden;
    }
`;

export default GlobalStyle;
