import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 0;
    right: 0;
    height: 100%;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    bottom: -270px;
    left: -59px;
    width: 553px;
    max-width: 553px;
    height: 605px;
  }
`;

export const Element = styled(motion.div)`
  position: relative;
  height: 100%;
`;

export const Photo = styled.picture`
  height: 100%;
`;
