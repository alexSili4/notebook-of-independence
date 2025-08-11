import styled from '@emotion/styled';
import sectionBgMob from '@/images/notebook/section-bg-mob-min.png';
import sectionBgDesk from '@/images/notebook/section-bg-desk-min.png';
import Logo from '@/icons/notebook/logo.svg?react';

export const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  height: 100%;
  background-color: #6983d0;
  background-image: url(${sectionBgMob});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    background-image: url(${sectionBgDesk});
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing(6)}px;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: ${({ theme }) => theme.spacing(31)}px;
    padding-left: ${({ theme }) => theme.spacing(24)}px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(12)}px;
    width: 38.9vw;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 20px;
  }
`;

export const LinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(12)}px;
  }
`;

export const LogoIcon = styled(Logo)`
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 540px;
  }
`;
