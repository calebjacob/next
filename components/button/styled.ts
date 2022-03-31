import { styled } from '@/styles/theme';

export const Button = styled('button', {
  borderRadius: '$standard',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontWeight: 500,
  fontFamily: '$body',
  paddingLeft: '$m',
  paddingRight: '$m',
  flexShrink: 0,
  transition: 'opacity 200ms',

  '&:hover': {
    opacity: 0.9
  },

  '&:active, &:focus': {
    opacity: 0.8
  },

  variants: {
    color: {
      primary: {
        background: '$brandPrimary',
        color: '$surface1'
      },
      secondary: {
        background: '$text2',
        color: '$surface1'
      }
    },
    size: {
      small: {
        fontSize: '$bodySmall',
        height: '$inputSmall'
      },
      standard: {
        fontSize: '$body',
        height: '$inputStandard'
      },
      large: {
        fontSize: '$h5',
        height: '$inputLarge'
      }
    }
  },

  defaultVariants: {
    color: 'primary',
    size: 'standard'
  }
});
