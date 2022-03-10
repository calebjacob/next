import type { FC, ReactNode } from 'react';

import type { ThemeSpacing } from '@/styles/themes';

import * as S from './styled';
import type { AlignContent, AlignItems, Direction, JustifyContent, Wrap } from './types';

interface Props {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  children: ReactNode;
  direction?: Direction;
  gap?: ThemeSpacing;
  justifyContent?: JustifyContent;
  wrap?: Wrap;
}

const Flex: FC<Props> = ({ direction = 'row', children, wrap = 'nowrap' }: Props) => {
  return <S.Flex>{children}</S.Flex>;
};

export default Flex;
