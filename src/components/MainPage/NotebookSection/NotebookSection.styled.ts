import styled from '@emotion/styled';
import sectionBg from '@/images/notebook/section-bg.png';
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
  padding-top: ${({ theme }) => theme.spacing(31)}px;
  padding-left: ${({ theme }) => theme.spacing(24)}px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(12)}px;
  width: 38.9vw;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
`;

export const LinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(12)}px;
`;

export const LogoIcon = styled(Logo)`
  width: 540px;
`;
