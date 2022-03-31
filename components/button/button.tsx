import type { ComponentProps } from '@stitches/react';

import * as S from './styled';

interface Props extends ComponentProps<typeof S.Button> {
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ children, type = 'button', ...props }: Props) => {
  return (
    <S.Button type={type} {...props}>
      <span>{children}</span>
    </S.Button>
  );
};
