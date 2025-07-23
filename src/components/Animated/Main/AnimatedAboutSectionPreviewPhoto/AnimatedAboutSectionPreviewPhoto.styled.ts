import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Element = styled(motion.div)``;

export const PhotoLeftWrap = styled(motion.div)`
  position: absolute;
  top: -82px;
  left: -162px;
`;

export const PhotoLeft = styled.img`
  width: 348px;
  height: 327px;
`;

export const PhotoRightWrap = styled(motion.div)`
  position: absolute;
  top: 32px;
  right: -139px;
`;

export const PhotoRight = styled.img`
  width: 360px;
  height: 259px;
`;
