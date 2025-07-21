import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)``;

export const Element = styled(motion.div)``;

export const Title = styled.h1`
  color: #6983d0;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 165.9px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -6.1px;
  text-align: left;
  text-transform: uppercase;
`;
