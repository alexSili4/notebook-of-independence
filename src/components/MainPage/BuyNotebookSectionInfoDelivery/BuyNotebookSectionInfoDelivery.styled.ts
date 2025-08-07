import styled from '@emotion/styled';

export const ContainerMob = styled.div`
  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desk}px) {
    display: none;
  }
`;

export const ContainerDesk = styled.div`
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;