import styled from '@emotion/styled';
import sectionBg from '@/images/azov/section-bg.png';
import Logo from '@/icons/azov/logo.svg?react';
import Line from '@/icons/azov/line.svg?react';

export const Section = styled.section`
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  height: 100%;
  background-color: #3a3a3a;
  background-image: url(${sectionBg});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing(20)}px;
  padding-bottom: ${({ theme }) => theme.spacing(9)}px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.spacing(20)}px;
  padding-right: ${({ theme }) => theme.spacing(20)}px;
`;

export const LogoIcon = styled(Logo)`
  width: 556px;
  height: 99px;
`;

export const TitleContainer = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing(2)}px;
`;

export const TitleWrap = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.32);
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 145.57px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -8.84px;
  text-transform: uppercase;
`;

export const LineIcon = styled(Line)`
  position: absolute;
  top: 134px;
  left: 22px;
  width: 1082px;
`;
