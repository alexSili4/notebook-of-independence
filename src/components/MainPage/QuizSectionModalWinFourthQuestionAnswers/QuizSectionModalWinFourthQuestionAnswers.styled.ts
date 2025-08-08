import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 1123px;
    height: 366px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    width: 100%;
    aspect-ratio: 343 / 358;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li``;
