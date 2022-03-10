import styled from 'styled-components';

const Link = styled.a`
  display: inline-block;
  cursor: pointer;
  font-weight: 500;
  font-family: ${p => p.theme.fonts.primary};
  transition: opacity ${p => p.theme.transitionSpeed};
  border-bottom: 1px solid;

  &:hover {
    opacity: 0.9;
  }

  &:active,
  &:focus {
    opacity: 0.8;
  }
`;

export const PrimaryLink = styled(Link)`
  color: ${p => p.theme.colors.brandPrimary};
`;

export const SecondaryLink = styled(Link)`
  color: ${p => p.theme.colors.text2};
`;
