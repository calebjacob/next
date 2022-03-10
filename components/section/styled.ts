import styled from 'styled-components';

import type { ThemeColors } from '@/styles/themes';

export const Section = styled.section<{ $background: ThemeColors; $noBorder: boolean }>`
  padding: ${p => p.theme.spacing.large};
  padding-bottom: ${p => p.theme.spacing.standard};
  background: ${p => p.theme.colors[p.$background]};
  border-bottom: 1px solid ${p => p.theme.colors.surface3};
  border-bottom: ${p => (p.$noBorder ? 'none' : undefined)};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: ${p => p.theme.breakPoints.phone}) {
    padding-left: ${p => p.theme.spacing.standard};
    padding-right: ${p => p.theme.spacing.standard};
  }
`;
