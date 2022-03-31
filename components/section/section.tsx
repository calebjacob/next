import type { ComponentProps } from '@stitches/react';
import type { ReactNode } from 'react';

import { Container } from '../container';
import { Stack } from '../flex';
import * as S from './styles';

interface Props extends ComponentProps<typeof S.Section> {
  children: ReactNode;
}

export const Section = (props: Props) => {
  return (
    <S.Section {...props}>
      <Container>
        <Stack>{props.children}</Stack>
      </Container>
    </S.Section>
  );
};
