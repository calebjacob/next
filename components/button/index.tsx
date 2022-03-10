import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import type { ThemeInputSizes } from '@/styles/themes';

import * as S from './styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: 'primary' | 'secondary';
  children: ReactNode;
  href?: string;
  size?: ThemeInputSizes;
}

const Button: FC<Props> = ({
  appearance = 'primary',
  children,
  href,
  size = 'standard',
  type = 'button',
  ...props
}: Props) => {
  const buttons = {
    primary: S.PrimaryButton,
    secondary: S.SecondaryButton
  };
  const StyledButton = buttons[appearance];
  const tag = href ? 'a' : 'button';

  return (
    <StyledButton as={tag} href={href} type={type} $size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
