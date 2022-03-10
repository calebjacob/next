import styled from 'styled-components';

import type { ThemeColors } from '@/styles/themes';

export const Paragraph = styled.p<{ $color: ThemeColors }>`
  color: ${p => p.theme.colors[p.$color]};
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.body};
  line-height: 1.5;
  margin-bottom: ${p => p.theme.spacing.standard};
`;
