import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`;

export const Element = styled(motion.div)`
  position: relative;
  height: 100%;
`;

export const Photo = styled.img`
  height: 100%;
`;
