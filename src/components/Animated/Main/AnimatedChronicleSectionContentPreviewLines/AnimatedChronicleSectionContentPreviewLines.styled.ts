import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const LeftLineContainer = styled(motion.div)`
  position: absolute;
  top: -242px;
  left: -16px;
  width: 424px;
  height: 387px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 114px;
    left: -501px;
    width: 485px;
    height: 270px;
  }
`;

export const LeftLineImgWrap = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const LeftLinePicture = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  width: 424px;
  max-width: 424px;
  height: 387px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    max-width: 485px;
    width: 485px;
    height: 270px;
  }
`;

export const RightLineContainer = styled(motion.div)`
  position: absolute;
  top: 281px;
  right: -16px;
  width: 392px;
  height: 112px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 69px;
    right: -391px;
    width: 455px;
    height: 138px;
  }
`;

export const RightLineImgWrap = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const RightLinePicture = styled.picture`
  position: absolute;
  top: 0;
  right: 0;
  width: 392px;
  max-width: 392px;
  height: 112px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 455px;
    max-width: 455px;
    height: 138px;
  }
`;
