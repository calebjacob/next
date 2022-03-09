import styled from 'styled-components';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacingDouble};
  padding-bottom: ${({ theme }) => theme.spacing};
  border-bottom: 1px solid #f00;
`;
