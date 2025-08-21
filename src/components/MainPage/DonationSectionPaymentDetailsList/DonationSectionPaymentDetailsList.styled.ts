import styled from '@emotion/styled';

export const List = styled.ul`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(6)}px;
  }
`;

export const ListItem = styled.li``;
