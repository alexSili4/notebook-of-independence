import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
`;

export const Element = styled(motion.div)`
  position: relative;
  pointer-events: all;
`;
