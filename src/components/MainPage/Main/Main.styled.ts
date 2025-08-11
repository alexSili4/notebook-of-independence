import styled from '@emotion/styled';

export const Container = styled.div`
  height: 2000lvh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 1500lvh;
  }
`;
