import { createGlobalStyle } from 'styled-components';

export const variables = {
  color: {
    white: '#FFFFFF',
    black: '#002535',
    grayDark: '#707B84',
    grayLight: '#F6F8F5',
  },

  theme: {
    themePrimary: '#05A859',
    themeSecondary: '#F15E4C',
  },

  gradient: {
    light: '#D8E6C5',
    medium: '#008884',
    dark: '#007B76',
  },

  shadow: {
    hard: '2px 2px 4px rgba($black, 0.8)',
    light: '0 0 5px rgba($black, 0.3)',
  },

  fontFamily: {
    main: `'Lato', sans-serif`,
    logo: `'Mr Dafoe', cursive`,
  },

  fontSize: {
    textSecondaryScreen: '1.2rem',
    textPrimaryScreen: '1.4rem',

    textSecondarytablet: '1.3rem',
    textPrimaryTablet: '1.6rem',

    textSecondaryDesktop: '1.4rem',
    textPrimaryDesktop: '1.7rem',
  },

  breakpoints: {
    sm: `(min-width: 576px)`,
    md: `(min-width: 768px)`,
    ld: `(min-width: 992px)`,
    xld: `(min-width: 1200px)`,
  },

  gap: {
    small: ` 5px`,
    medium: `1rem`,
    $ig: `2rem`,
  },
};

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%;
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
        font-size: ${variables.fontSize.textPrimaryScreen};
        font-family: ${variables.fontFamily.main};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${variables.color.black};
        overflow: hidden;
    }
`;

export default GlobalStyle;
