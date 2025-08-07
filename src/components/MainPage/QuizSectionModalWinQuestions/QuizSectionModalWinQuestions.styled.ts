import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing(27)}px;
  padding-bottom: ${({ theme }) => theme.spacing(7)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: ${({ theme }) => theme.spacing(38)}px;
    padding-bottom: ${({ theme }) => theme.spacing(25)}px;
  }
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
`;
