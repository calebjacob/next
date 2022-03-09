export type Theme = typeof standardTheme;

export type ThemeColors = keyof typeof standardTheme.colors;
export type ThemeInputSizes = keyof typeof standardTheme.inputSizes;

export const standardTheme = {
  colors: {
    brandPrimary: '#2135da',
    surface1: '#ffffff',
    surface2: '#eaeaea',
    surface3: '#c5c5c5',
    text1: '#151515',
    text2: '#323232',
    text3: '#4c4c4c'
  },

  fonts: {
    primary: 'Roboto, sans-serif'
  },

  fontSizes: {
    body: '1rem',
    bodySmall: '0.8rem',
    h1: '3rem',
    h2: '2.5rem',
    h3: '2rem',
    h4: '1.5rem',
    h5: '1rem'
  },

  inputSizes: {
    small: '1.5rem',
    standard: '2rem',
    large: '3rem'
  },

  maxContainerWidth: '1200px',

  spacing: '1rem',
  spacingDouble: '2rem',
  spacingHalf: '0.5rem',

  transitionSpeed: '200ms'
};

// export const otherTheme: Theme = {
//   colors: {
//     primary: 'green'
//   }
// };
