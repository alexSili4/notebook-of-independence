import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    height: 100lvh;
  }
`;

export const Element = styled(motion.div)`
  pointer-events: all;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    height: 100%;
    pointer-events: all;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;
