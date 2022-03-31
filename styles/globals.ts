import { globalCss } from './theme';

const styles = globalCss({
  html: {
    fontSize: '100%',
    height: '100%'
  },

  body: {
    color: 'pink',
    height: '100%',
    lineHeight: 1.5,
    background: '$surface2',
    fontFamily: '$body'
  },

  'body > div': {
    height: '100%'
  }
});

export default styles;
