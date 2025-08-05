import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { IStyledMarkerWrapProps } from './AnimatedAboutSectionContentSlideSecond.types';

export const Container = styled(motion.div)`
  position: relative;
  height: 100lvh;
  padding-top: ${({ theme }) => theme.spacing(92)}px;
  padding-left: ${({ theme }) => theme.spacing(12)}px;
`;

export const Content = styled.div`
  position: absolute;
  top: 62px;
  left: 27.2%;
`;

export const ImageWrap = styled(motion.div)`
  position: relative;
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

export const Image = styled.img`
  width: 111px;
  height: 164px;
`;

export const MarkerWrap = styled.div<IStyledMarkerWrapProps>`
  position: absolute;
  top: 77px;
  left: 4px;
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  transition: opacity
    ${({ theme }) => theme.transitionDurationAndFunc.aboutSlider};
  pointer-events: none;
`;

export const DescWrap = styled.div`
  position: absolute;
  top: 172px;
  left: -48px;
  width: 293px;
`;

export const Desc = styled.p`
  color: #6983d0;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.09;
`;

export const Text = styled.p`
  width: 285px;
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.08;
`;
