import styled from '@emotion/styled';
import Silpo from '@/icons/header/silpo.svg?react';
import Logo from '@/icons/header/logo.svg?react';

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme: { spacing } }) => `${spacing(6)}px ${spacing(15)}px`};
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const ListItem = styled.li``;

export const SilpoIcon = styled(Silpo)`
  display: block;
  width: 101px;
  height: 39px;
`;

export const LogoIcon = styled(Logo)`
  display: block;
  width: 142px;
  height: 49px;
`;

export const MenuBtn = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  aspect-ratio: 1 / 1;
  border: none;
  border-radius: 50%;
  padding: 0;
  background-color: #2f2f2f;

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;
