import Star from '@/icons/azov/star.svg?react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  top: 40px;
  left: 276px;
  width: 57px;
  height: 44px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 167px;
    left: 1223px;
    width: 121px;
    height: 94px;
  }
`;

export const Element = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const StarIcon = styled(Star)`
  position: absolute;
  top: 0;
  right: 0;
  width: 57px;
  max-width: 57px;
  height: 44px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 121px;
    max-width: 121px;
    height: 94px;
  }
`;
