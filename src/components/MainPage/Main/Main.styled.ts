import styled from '@emotion/styled';

export const Container = styled.div`
  height: 1600lvh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 600lvh;
  }
`;
