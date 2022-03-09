import styled from 'styled-components';

import type { ThemeColors } from '@/styles/themes';

const Text = styled.p<{ $color: ThemeColors }>`
  color: ${p => p.theme.colors[p.$color]};
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 300;
  font-size: ${p => p.theme.fontSizes.body};
  line-height: 1.5;
  margin-bottom: ${p => p.theme.spacing};
`;

export const H1 = styled(Text)`
  font-size: ${p => p.theme.fontSizes.h1};
  line-height: 1.1;
`;

export const H2 = styled(Text)`
  font-size: ${p => p.theme.fontSizes.h2};
  line-height: 1.2;
`;

export const H3 = styled(Text)`
  font-size: ${p => p.theme.fontSizes.h3};
  line-height: 1.3;
`;

export const H4 = styled(Text)`
  font-size: ${p => p.theme.fontSizes.h4};
  line-height: 1.4;
`;

export const H5 = styled(Text)`
  font-size: ${p => p.theme.fontSizes.h5};
`;

export const H6 = styled(Text)`
  font-size: ${p => p.theme.fontSizes.h5};
`;
