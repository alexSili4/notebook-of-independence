import styled from '@emotion/styled';

export const Section = styled.section``;

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
  justify-content: space-between;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    flex-direction: row;
    padding-left: ${({ theme }) => theme.spacing(20)}px;
    padding-right: ${({ theme }) => theme.spacing(20)}px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    padding-top: ${({ theme }) => theme.spacing(6)}px;
  }
`;
