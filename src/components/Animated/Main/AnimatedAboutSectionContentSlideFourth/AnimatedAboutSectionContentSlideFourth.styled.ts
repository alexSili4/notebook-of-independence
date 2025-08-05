import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledMarkerWrapProps } from './AnimatedAboutSectionContentSlideFourth.types';

export const Container = styled(motion.div)`
  position: relative;
  height: 100lvh;
  padding-top: ${({ theme }) => theme.spacing(65)}px;
  padding-left: ${({ theme }) => theme.spacing(8)}px;
`;

export const PhotoWrap = styled(motion.div)`
  position: absolute;
  top: 66px;
  left: 27.7vw;
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const Photo = styled.img`
  width: 178px;
  height: 167px;
`;

export const MarkerWrap = styled.div<IStyledMarkerWrapProps>`
  position: absolute;
  top: 77px;
  left: 7px;
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  transition: opacity
    ${({ theme }) => theme.transitionDurationAndFunc.aboutSlider};
  pointer-events: none;
`;

export const Text = styled.p`
  width: 330px;
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.08;
`;
