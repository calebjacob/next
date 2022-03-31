import { createStitches } from '@stitches/react';

export const { config, createTheme, css, getCssText, globalCss, styled, theme } = createStitches({
  theme: {
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
      body: 'Roboto, sans-serif'
    },
    fontSizes: {
      body: '1rem',
      bodySmall: '0.8rem',
      h1: '3rem',
      h2: '2.5rem',
      h3: '2rem',
      h4: '1.5rem',
      h5: '1rem',
      h6: '0.8rem'
    },
    radii: {
      standard: '5px'
    },
    space: {
      xs: '0.25rem',
      s: '0.5rem',
      m: '1rem',
      l: '2rem',
      xl: '4rem'
    },
    sizes: {
      inputSmall: '1.5rem',
      inputStandard: '2rem',
      inputLarge: '3rem',
      maxContainerWidth: '1200px'
    },
    transitions: {
      standardSpeed: '200ms'
    }
  },
  media: {
    mobile: '(max-width: 500px)',
    tablet: '(max-width: 1000px)'
  }
});
