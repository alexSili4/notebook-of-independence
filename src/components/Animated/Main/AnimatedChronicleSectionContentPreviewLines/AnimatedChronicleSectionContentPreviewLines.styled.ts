import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const LeftLineContainer = styled(motion.div)`
  position: absolute;
  top: 111px;
  left: -423px;
  width: 407px;
  height: 251px;
`;

export const LeftLineImgWrap = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const LeftLine = styled.img`
  width: 407px;
  max-width: 407px;
  height: 251px;
`;

export const RightLineContainer = styled(motion.div)`
  position: absolute;
  top: 69px;
  right: -391px;
  width: 455px;
  height: 138px;
`;

export const RightLineImgWrap = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const RightLine = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 455px;
  max-width: 455px;
  height: 138px;
`;
