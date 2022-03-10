import type { FC, HTMLAttributes, ReactNode } from 'react';

import type { ThemeColors } from '@/styles/themes';

import * as S from './styled';

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  as?: As;
  children: ReactNode;
  color?: ThemeColors;
  level: '1' | '2' | '3' | '4' | '5' | '6';
}

const Heading: FC<Props> = ({ as, children, color = 'text1', level, ...props }: Props) => {
  const asTag: As = as || `h${level}`;
  const headings = {
    1: S.H1,
    2: S.H2,
    3: S.H3,
    4: S.H4,
    5: S.H5,
    6: S.H6
  };
  const StyledHeading = headings[level];

  return (
    <StyledHeading as={asTag} $color={color} {...props}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
