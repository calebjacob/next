import type { FC, ReactNode } from 'react';

import Container from '../container';
import * as S from './styled';

interface Props {
  children: ReactNode;
}

const Section: FC<Props> = ({ children }: Props) => {
  return (
    <S.Section>
      <Container>{children}</Container>
    </S.Section>
  );
};

export default Section;
