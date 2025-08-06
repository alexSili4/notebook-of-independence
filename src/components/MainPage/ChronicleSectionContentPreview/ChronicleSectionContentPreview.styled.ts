import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 27.1lvh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: 18.4lvh;
  }
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
`;
