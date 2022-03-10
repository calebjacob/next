import type { FC, ReactNode } from 'react';

import type { ThemeBreakPoints, ThemeSpacing } from '@/styles/themes';

import * as S from './styled';
import type { AlignContent, AlignItems, Direction, JustifyContent, Wrap } from './types';

interface Props {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  breakPoint?: ThemeBreakPoints;
  children: ReactNode;
  direction?: Direction;
  gap?: ThemeSpacing;
  justifyContent?: JustifyContent;
  wrap?: Wrap;
}

const Flex: FC<Props> = ({
  alignContent,
  alignItems = 'center',
  breakPoint,
  children,
  direction = 'row',
  gap = 'standard',
  justifyContent = 'space-between',
  wrap = 'nowrap'
}: Props) => {
  return (
    <S.Flex
      $styles={{
        alignContent,
        alignItems,
        breakPoint,
        direction,
        gap,
        justifyContent,
        wrap
      }}
    >
      {children}
    </S.Flex>
  );
};

export default Flex;
