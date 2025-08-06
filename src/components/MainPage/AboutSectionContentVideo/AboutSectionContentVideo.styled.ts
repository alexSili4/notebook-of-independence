import styled from '@emotion/styled';
import PlayVideoBtnLine from '@/icons/about/play-video-btn-line.svg?react';
import videoBg from '@/images/about/video-bg.png';
import ReactPlayer from 'react-player';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(15)}px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
  }
`;

export const Content = styled.div`
  position: relative;
`;

export const VideoWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(9)}px;
  height: 40.5vh;
  aspect-ratio: 368 / 271;
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(6)}px;
  padding-left: ${({ theme }) => theme.spacing(8)}px;
  background-image: url(${videoBg});
  background-position: 0 0;
  background-size: 100% 87.5%;
  background-repeat: no-repeat;
  rotate: -2.49deg;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(3)}px;
    height: 80.6vh;
    aspect-ratio: 967 / 645;
    padding-top: ${({ theme }) => theme.spacing(12)}px;
    padding-right: ${({ theme }) => theme.spacing(21)}px;
    padding-bottom: ${({ theme }) => theme.spacing(8)}px;
    padding-left: ${({ theme }) => theme.spacing(18)}px;
    background-size: 100% 100%;
  }
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
`;

export const VideoBg = styled.img`
  position: absolute;
  top: 20px;
  left: -3px;
  height: 31.5vh;
  aspect-ratio: 368 / 211;
  rotate: 2.13deg;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 50%;
    left: 50%;
    height: 68.3vh;
    aspect-ratio: 954 / 546;
    translate: -50% -50%;
  }
`;

export const Desc = styled.p`
  color: #595959;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.09;
`;

export const PlayVideoBtn = styled.button`
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 222px;
  height: 46px;
  border: none;
  border-radius: 100px;
  padding: 0;
  background-color: #2f2f2f;
`;

export const PlayVideoBtnTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const PlayVideoBtnLineIcon = styled(PlayVideoBtnLine)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 235px;
  height: 58px;
  translate: -50% -50%;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all};

  button:is(:hover, :focus) & {
    opacity: 1;
  }
`;
