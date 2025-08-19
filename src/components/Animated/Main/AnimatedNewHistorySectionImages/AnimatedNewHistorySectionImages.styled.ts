import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100lvh;
  }
`;

export const Element = styled(motion.div)``;
