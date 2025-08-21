import styled from '@emotion/styled';
import DecorativeAccent from '@/icons/newHistory/decorative-accent.svg?react';
import { IStyledDescPartProps } from './NewHistorySectionText.types';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  padding-top: 12lvh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
    padding-top: 9.8lvh;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 32px;
  }
`;

export const Content = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
  width: 343px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
    width: 776px;
  }
`;

export const DescWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
  }
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 20px;
  }
`;

export const DescPart = styled.span<IStyledDescPartProps>`
  display: ${({ isDisplayBlock }) => isDisplayBlock && 'block'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: block;
  }
`;

export const DecorativeAccentIcon = styled(DecorativeAccent)`
  position: absolute;
  top: 133px;
  left: 13px;
  width: 300px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 83px;
    left: 215px;
    width: 360px;
  }
`;
