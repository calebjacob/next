import type { FC, HTMLAttributes, ReactNode } from 'react';

import type { ThemeColors } from '@/styles/themes';

import Container from '../container';
import * as S from './styled';

interface Props extends HTMLAttributes<HTMLDivElement> {
  background?: ThemeColors;
  children: ReactNode;
  noBorder?: boolean;
}

const Section: FC<Props> = ({
  background = 'surface2',
  children,
  noBorder = false,
  ...props
}: Props) => {
  return (
    <S.Section $background={background} $noBorder={noBorder} {...props}>
      <Container>{children}</Container>
    </S.Section>
  );
};

export default Section;
