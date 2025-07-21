import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

export const Container = styled(motion.div)``;

export const Element = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% 0;
  overflow: hidden;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
`;
