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
  const buttonTypes = {
    primary: S.PrimaryButton,
    secondary: S.SecondaryButton
  };

  const Tag = buttonTypes[appearance];

  return (
    <Tag $size={size} type={type} {...props}>
      {children}
    </Tag>
  );
};

export default Button;
