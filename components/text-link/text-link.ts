import { styled } from '@/styles/theme';

export const TextLink = styled('a', {
  display: 'inline-block',
  cursor: 'pointer',
  fontWeight: 500,
  fontFamily: '$body',
  transition: 'opacity 200ms',
  borderBottom: '1px solid',

  '&:hover': {
    opacity: 0.9
  },

  '&:active, &:focus': {
    opacity: 0.8
  },

  variants: {
    color: {
      primary: {
        color: '$brandPrimary'
      },
      secondary: {
        color: '$text2'
      }
    }
  }
});
