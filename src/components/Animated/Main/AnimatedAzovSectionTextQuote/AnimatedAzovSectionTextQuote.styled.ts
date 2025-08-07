import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  left: 266px;
  top: -52px;
  width: 79px;
  height: 79px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    left: -114px;
    top: -30px;
    width: 113px;
    height: 113px;
  }
`;

export const Element = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Quote = styled.img`
  width: 79px;
  max-width: 79px;
  height: 79px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 113px;
    max-width: 113px;
    height: 113px;
  }
`;
