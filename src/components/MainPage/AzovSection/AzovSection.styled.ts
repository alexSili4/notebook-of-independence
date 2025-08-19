import styled from '@emotion/styled';
import sectionBgMob from '@/images/azov/section-bg-mob-min.png';
import sectionBgDesk from '@/images/azov/section-bg-desk-min.png';
import Logo from '@/icons/azov/logo.svg?react';
import Line from '@/icons/azov/line.svg?react';

export const Section = styled.section`
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  height: 100%;
  background-color: #3a3a3a;
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
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: ${({ theme }) => theme.spacing(20)}px;
    padding-bottom: ${({ theme }) => theme.spacing(9)}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(12)}px;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: ${({ theme }) => theme.spacing(20)}px;
    padding-right: ${({ theme }) => theme.spacing(20)}px;
  }
`;

export const LogoIcon = styled(Logo)`
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 556px;
    height: 99px;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-left: ${({ theme }) => theme.spacing(2)}px;
    padding-right: ${({ theme }) => theme.spacing(2)}px;
  }
`;

export const TitleWrap = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.32);
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 42.35px;
  font-weight: 900;
  line-height: 1.04;
  letter-spacing: -2.57px;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 145.57px;
    line-height: 1;
    letter-spacing: -8.84px;
  }
`;

export const TitleDesk = styled(Title)`
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;

export const TitleMob = styled(Title)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: none;
  }
`;

export const LineIcon = styled(Line)`
  position: absolute;
  top: 74px;
  left: 0px;
  width: 283px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 134px;
    left: 22px;
    width: 1082px;
  }
`;
