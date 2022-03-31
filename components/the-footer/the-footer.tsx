import { Container } from '../container';
import { P } from '../paragraph';
import * as S from './styles';

export const TheFooter = () => {
  return (
    <S.Footer>
      <Container>
        <P>Here is my footer. All rights reserved.</P>
      </Container>
    </S.Footer>
  );
};
