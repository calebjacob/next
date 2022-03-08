import type { NextPage } from 'next';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const HomePage: NextPage = () => {
  return (
    <>
      <Paragraph>My home page.</Paragraph>
    </>
  );
};

export default HomePage;
