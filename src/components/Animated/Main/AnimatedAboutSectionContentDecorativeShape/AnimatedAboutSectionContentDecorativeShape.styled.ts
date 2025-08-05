import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  top: -9px;
  left: -2px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 0;
    left: -1vw;
  }
`;

export const Element = styled(motion.div)`
  height: 100%;
`;

export const DecorativeShape = styled.div`
  width: 142%;
  height: 88%;
  background-color: #f1cc7d;
  rotate: 2.07deg;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 50.5vw;
    height: 100%;
  }
`;
