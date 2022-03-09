import type { FC } from 'react';

import * as S from './styled';

const TheHeader: FC = () => {
  return (
    <S.Header>
      <S.Logo>My App</S.Logo>
    </S.Header>
  );
};

export default TheHeader;
