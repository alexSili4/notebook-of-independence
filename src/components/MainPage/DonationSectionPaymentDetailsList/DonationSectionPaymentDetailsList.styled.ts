import styled from '@emotion/styled';

export const List = styled.ul`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(6)}px;
  height: 100%;
`;

export const ListItem = styled.li``;
