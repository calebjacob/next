import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

export default Container;
