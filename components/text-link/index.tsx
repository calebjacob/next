import type { AnchorHTMLAttributes, FC, ReactNode } from 'react';

import * as S from './styled';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  appearance?: 'primary' | 'secondary';
  children: ReactNode;
}

const TextLink: FC<Props> = ({ appearance = 'primary', children, ...props }: Props) => {
  const links = {
    primary: S.PrimaryLink,
    secondary: S.SecondaryLink
  };
  const StyledLink = links[appearance];

  return <StyledLink {...props}>{children}</StyledLink>;
};

export default TextLink;
