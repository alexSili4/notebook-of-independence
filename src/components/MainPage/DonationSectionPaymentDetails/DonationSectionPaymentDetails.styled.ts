import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 36.7vw;
    height: 100%;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    padding-bottom: ${({ theme }) => theme.spacing(30)}px;
  }
`;
