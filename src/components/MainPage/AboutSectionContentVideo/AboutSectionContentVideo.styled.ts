import styled from '@emotion/styled';
import PlayVideoBtnLine from '@/icons/about/play-video-btn-line.svg?react';
import videoBg from '@/images/about/video-bg.png';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(6)}px;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div``;

export const VideoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
  padding-top: ${({ theme }) => theme.spacing(12)}px;
  padding-right: ${({ theme }) => theme.spacing(21)}px;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;
  padding-left: ${({ theme }) => theme.spacing(18)}px;
  background-image: url(${videoBg});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Desc = styled.p`
  color: #595959;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.09;
`;

export const PlayVideoBtn = styled.button`
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
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  button:is(:hover, :focus) & {
    opacity: 1;
  }
`;
