import styled from '@emotion/styled';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { IoVolumeMute, IoVolumeHigh } from 'react-icons/io5';
import {
  IStyledMutedBtnProps,
  IStyledVolumeIconProps,
} from './AnimatedHeroSectionFullscreenVideo.types';

export const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  translate: -50% 0;
`;

export const Element = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% 0;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
`;

export const MutedBtn = styled.button<IStyledMutedBtnProps>`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  pointer-events: ${({ inView }) => (inView ? 'all' : 'none')};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.video};
`;

export const VolumeMuteIcon = styled(IoVolumeMute)<IStyledVolumeIconProps>`
  width: 40px;
  height: 40px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 100px;
    height: 100px;
  }
`;

export const VolumeHighIcon = styled(IoVolumeHigh)<IStyledVolumeIconProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  translate: -50% -50%;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 100px;
    height: 100px;
  }
`;
