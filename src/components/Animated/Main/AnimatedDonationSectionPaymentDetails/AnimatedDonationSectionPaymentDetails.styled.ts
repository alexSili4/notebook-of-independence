import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 100%;
  }
`;

export const Element = styled(motion.div)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    height: 100%;
  }
`;
