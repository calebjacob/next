import { styled } from '@/styles/theme';

export const Header = styled('header', {
  padding: '$m',
  background: '$text1',
  flexShrink: 0,
  textAlign: 'center'
});

export const Logo = styled('p', {
  color: '$surface1',
  fontSize: '1rem',
  fontWeight: 500,
  textTransform: 'uppercase'
});
