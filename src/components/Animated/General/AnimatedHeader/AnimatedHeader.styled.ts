import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.header};
  width: 100%;
  pointer-events: none;
`;

export const Element = styled(motion.div)``;
