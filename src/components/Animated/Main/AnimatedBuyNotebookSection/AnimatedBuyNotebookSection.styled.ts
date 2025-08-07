import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const Element = styled(motion.div)`
  pointer-events: all;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 100%;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    position: absolute;
    bottom: 0;
    left: 0;
    min-height: 100%;
  }
`;
