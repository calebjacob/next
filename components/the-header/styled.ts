import styled from 'styled-components';

export const Header = styled.header`
  padding: 1rem;
  background: ${p => p.theme.colors.text1};
  flex-shrink: 0;
  text-align: center;
`;

export const Logo = styled.p`
  color: ${p => p.theme.colors.surface1};
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
`;
