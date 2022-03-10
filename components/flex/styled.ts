import styled, { css } from 'styled-components';

import type { ThemeBreakPoints, ThemeSpacing } from '@/styles/themes';

import type { AlignContent, AlignItems, Direction, JustifyContent, Wrap } from './types';

const Breakpoint = css`
  flex-direction: column;
  margin-bottom: ${p => p.theme.spacing.standard};

  & > * {
    margin-bottom: 0;
  }
`;

export const Flex = styled.div<{
  $styles: {
    alignContent?: AlignContent;
    alignItems: AlignItems;
    breakPoint?: ThemeBreakPoints;
    direction: Direction;
    gap: ThemeSpacing;
    justifyContent: JustifyContent;
    wrap: Wrap;
  };
}>`
  display: flex;
  align-content: ${p => p.$styles.alignContent};
  align-items: ${p => p.$styles.alignItems};
  flex-direction: ${p => p.$styles.direction};
  gap: ${p => p.theme.spacing[p.$styles.gap]};
  justify-content: ${p => p.$styles.justifyContent};
  flex-wrap: ${p => p.$styles.wrap};

  ${p =>
    p.$styles.breakPoint &&
    css`
      @media (max-width: ${p.theme.breakPoints[p.$styles.breakPoint]}) {
        ${Breakpoint}
      }
    `};
`;
