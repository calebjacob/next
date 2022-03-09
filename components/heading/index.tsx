import type { FC, ReactNode } from 'react';

import type { ThemeColors } from '@/styles/themes';

import * as S from './styled';

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface Props {
  as?: As;
  children: ReactNode;
  color?: ThemeColors;
  level: '1' | '2' | '3' | '4' | '5' | '6';
}

const Heading: FC<Props> = ({ as, children, color = 'text1', level }: Props) => {
  const asTag: As = as || `h${level}`;
  const tagName = `H${level}` as keyof typeof S;
  const Tag = S[tagName];

  return (
    <Tag as={asTag} $color={color}>
      {children}
    </Tag>
  );
};

export default Heading;
