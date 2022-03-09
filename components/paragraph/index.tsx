import type { FC, ReactNode } from 'react';

import type { ThemeColors } from '@/styles/themes';

import * as S from './styled';

interface Props {
  children: ReactNode;
  color?: ThemeColors;
}

const Paragraph: FC<Props> = ({ children, color = 'text2' }: Props) => {
  return <S.P $color={color}>{children}</S.P>;
};

export default Paragraph;
