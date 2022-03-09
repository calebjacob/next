import type { FC } from 'react';

import Container from '../container';
import Paragraph from '../paragraph';
import * as S from './styled';

const TheFooter: FC = () => {
  return (
    <S.Footer>
      <Container>
        <Paragraph>Here is my footer. All rights reserved.</Paragraph>
      </Container>
    </S.Footer>
  );
};

export default TheFooter;
