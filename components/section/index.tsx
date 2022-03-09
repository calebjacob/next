import type { FC, ReactNode } from 'react';

import type { ThemeColors } from '@/styles/themes';

import Container from '../container';
import * as S from './styled';

interface Props {
  background?: ThemeColors;
  children: ReactNode;
  noBorder?: boolean;
}

const Section: FC<Props> = ({ background = 'surface2', children, noBorder = false }: Props) => {
  return (
    <S.Section $background={background} $noBorder={noBorder}>
      <Container>{children}</Container>
    </S.Section>
  );
};

export default Section;
