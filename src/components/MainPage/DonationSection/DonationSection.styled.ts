import styled from '@emotion/styled';

export const Section = styled.section`
  min-height: 100lvh;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 100vh;
  }
`;

export const Background = styled.div`
  position: relative;
  height: 100%;
  background-color: #404040;
`;

export const BackgroundImg = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const BackgroundTexture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(12)}px;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: ${({ theme }) => theme.spacing(20)}px;
    padding-right: ${({ theme }) => theme.spacing(20)}px;
    overflow: hidden;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    justify-content: flex-end;
    padding-top: ${({ theme }) => theme.spacing(6)}px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) and (min-height: 700px) {
    gap: ${({ theme }) => theme.spacing(16)}px;
  }
`;
