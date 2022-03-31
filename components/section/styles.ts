import { styled } from '@/styles/theme';

export const Section = styled('section', {
  padding: '$l',
  borderBottom: '1px solid',
  borderColor: '$surface3',

  '&:last-child': {
    borderBottom: 'none'
  },

  '@mobile': {
    padding: '$m'
  },

  variants: {
    color: {
      primary: {
        background: '$surface1'
      }
    },

    noBorder: {
      true: {
        borderBottom: 'none'
      }
    }
  }
});
