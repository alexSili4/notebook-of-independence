import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledMarkerWrapProps } from './AnimatedAboutSectionContentSlideFifth.types';

export const Container = styled(motion.div)`
  position: relative;
  height: 100lvh;
  padding-top: ${({ theme }) => theme.spacing(65)}px;
  padding-left: ${({ theme }) => theme.spacing(8)}px;
`;

export const PhotoWrap = styled(motion.div)`
  position: absolute;
  top: 6px;
  left: 37.1vw;
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
  width: 220px;
  height: 234px;
`;

export const Image = styled.img`
  position: absolute;
  top: 100px;
  left: -8px;
  width: 101px;
  height: 101px;
`;

export const MarkerWrap = styled.div<IStyledMarkerWrapProps>`
  position: absolute;
  top: 88px;
  left: 14px;
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
