import styled from 'styled-components';

import type { ThemeColors } from '@/styles/themes';

export const Section = styled.section<{ $background: ThemeColors; $noBorder: boolean }>`
  padding: ${p => p.theme.spacingDouble};
  padding-bottom: ${p => p.theme.spacing};
  background: ${p => p.theme.colors[p.$background]};
  border-bottom: 1px solid ${p => p.theme.colors.surface3};
  border-bottom: ${({ $noBorder }) => ($noBorder ? 'none' : undefined)};

  &:last-child {
    border-bottom: none;
  }
`;
