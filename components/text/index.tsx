import styled, { css } from 'styled-components';

const shared = css`
  color: ${({ theme }) => theme.colors.text1};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: 300;
  margin-bottom: ${({ theme }) => theme.spacing};
`;

export const H1 = styled.h1`
  ${shared}
  line-height: 1.1;
`;

export const H2 = styled.h2`
  ${shared}
  font-size: ${({ theme }) => theme.fontSizes.h2};
  line-height: 1.2;
`;

export const H3 = styled.h3`
  ${shared}
  font-size: ${({ theme }) => theme.fontSizes.h3};
  line-height: 1.3;
`;

export const H4 = styled.h4`
  ${shared}
  font-size: ${({ theme }) => theme.fontSizes.h4};
  line-height: 1.4;
`;

export const H5 = styled.h5`
  ${shared}
  font-size: ${({ theme }) => theme.fontSizes.h5};
  line-height: 1.5;
`;

export const P = styled.p`
  color: ${({ theme }) => theme.colors.text2};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 400;
  margin-bottom: ${({ theme }) => theme.spacing};
`;
