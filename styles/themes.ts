export type Theme = typeof standardTheme;

export const standardTheme = {
  colors: {
    brandPrimary: 'red',
    text1: '#151515',
    text2: '#323232',
    text3: '#4c4c4c'
  },

  fonts: {
    primary: 'sans-serif'
  },

  fontSizes: {
    body: '1rem',
    h1: '3rem',
    h2: '2.5rem',
    h3: '2rem',
    h4: '1.5rem',
    h5: '1rem'
  },

  maxContainerWidth: '1200px',

  spacing: '1rem',
  spacingDouble: '2rem',
  spacingHalf: '0.5rem'
};

// export const otherTheme: Theme = {
//   colors: {
//     primary: 'green'
//   }
// };
