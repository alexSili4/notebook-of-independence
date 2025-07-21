import styled from '@emotion/styled';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  translate: -50% 0;
`;

export const Element = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% 0;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
`;
