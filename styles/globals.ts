import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  body > div {
    height: 100%;
  }

  html,
  body {
    font-size: 16px;
    line-height: 1.5;
    font-family: ${p => p.theme.fonts.primary};
    background: ${p => p.theme.colors.surface2};
  }
`;

export default GlobalStyle;
