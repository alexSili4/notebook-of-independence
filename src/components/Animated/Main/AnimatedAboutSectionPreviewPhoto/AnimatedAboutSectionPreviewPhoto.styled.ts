import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Element = styled(motion.div)``;

export const PhotoLeftWrap = styled(motion.div)`
  position: absolute;
  top: -249px;
  left: 17px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: -82px;
    left: -162px;
  }
`;

export const PhotoLeft = styled.img`
  width: 241px;
  height: 226px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 348px;
    height: 327px;
  }
`;

export const PhotoRightWrap = styled(motion.div)`
  position: absolute;
  bottom: -234px;
  right: 6px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 32px;
    right: -139px;
  }
`;

export const PhotoRight = styled.img`
  width: 292px;
  height: 224px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 360px;
    height: 259px;
  }
`;
