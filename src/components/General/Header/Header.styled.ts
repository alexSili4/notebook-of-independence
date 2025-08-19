import styled from '@emotion/styled';
import Silpo from '@/icons/header/silpo.svg?react';
import Logo from '@/icons/header/logo.svg?react';
import { IStyledSilpoIconProps, IStyleXIconProps } from './Header.types';
import { RxCross1 } from 'react-icons/rx';

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

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(2)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    justify-content: space-between;
    gap: 0;
  }
`;

export const SilpoIcon = styled(Silpo)<IStyledSilpoIconProps>`
  display: block;
  width: 73px;
  height: 29px;
  opacity: ${({ isFake }) => (isFake ? 0 : 1)};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 101px;
    height: 39px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    display: ${({ isFake }) => isFake && 'none'};
  }
`;

export const XIcon = styled(RxCross1)<IStyleXIconProps>`
  width: 20px;
  height: 20px;
  color: #515151;
  opacity: ${({ isFake }) => (isFake ? 0 : 1)};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: none;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    display: ${({ isFake }) => isFake && 'none'};
  }
`;

export const LogoIcon = styled(Logo)`
  display: block;
  width: 128px;
  height: 44px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: calc(142px * 1.5);
    height: calc(49px * 1.5);
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
