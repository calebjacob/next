import type { FC, HTMLAttributes, ReactNode } from 'react';

import type { ThemeColors } from '@/styles/themes';

import * as S from './styled';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  color?: ThemeColors;
}

const Paragraph: FC<Props> = ({ children, color = 'text2', ...props }: Props) => {
  return (
    <S.Paragraph $color={color} {...props}>
      {children}
    </S.Paragraph>
  );
};

export default Paragraph;
