import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import type { ThemeInputSizes } from '@/styles/themes';

import * as S from './styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: 'primary' | 'secondary';
  children: ReactNode;
  size?: ThemeInputSizes;
}

const Button: FC<Props> = ({
  appearance = 'primary',
  children,
  size = 'standard',
  type = 'button',
  ...props
}: Props) => {
  const buttons = {
    primary: S.PrimaryButton,
    secondary: S.SecondaryButton
  };
  const StyledButton = buttons[appearance];

  return (
    <StyledButton $size={size} type={type} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
