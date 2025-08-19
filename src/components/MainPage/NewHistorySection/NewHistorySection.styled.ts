import styled from '@emotion/styled';

export const Section = styled.section`
  min-height: 100lvh;
  background-color: #3a3a3a;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 100vh;
  }
`;

export const Container = styled.div`
  height: 100%;
`;
