import { styled } from '@/styles/theme';

export const TheWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  margin: '0 auto'
});

export const TheWrapperContent = styled('main', {
  flex: '1 0 auto',
  width: '100%',
  boxShadow: '0 0 60px rgba(0, 0, 0, 0.2)'
});
