import styled from '@emotion/styled';
import Silpo from '@/icons/header/silpo.svg?react';
import Logo from '@/icons/header/logo.svg?react';

export const StyledHeader = styled.header``;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme: { spacing } }) => `${spacing(3)}px ${spacing(6)}px`};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding: ${({ theme: { spacing } }) => `${spacing(6)}px ${spacing(15)}px`};
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(3)}px;
  }
`;

export const ListItem = styled.li``;

export const SilpoIcon = styled(Silpo)`
  display: block;
  width: 73px;
  height: 29px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 101px;
    height: 39px;
  }
`;

export const LogoIcon = styled(Logo)`
  display: block;
  width: 128px;
  height: 44px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 142px;
    height: 49px;
  }
`;

export const MenuBtn = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  aspect-ratio: 1 / 1;
  border: none;
  border-radius: 50%;
  padding: 0;
  background-color: #2f2f2f;

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 48px;
  }
`;
