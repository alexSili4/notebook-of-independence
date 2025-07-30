import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const InfoWrap = styled(motion.div)`
  position: absolute;
  top: 85px;
  right: 73px;
`;

export const InfoElement = styled(motion.div)`
  overflow: hidden;
`;

export const Info = styled.img`
  width: 144px;
  max-width: 144px;
`;

export const LightWrap = styled(motion.div)`
  position: absolute;
  bottom: 123px;
  left: 81px;
  width: 236px;
  height: 228px;
`;

export const LightElement = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Light = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 236px;
  max-width: 236px;
  height: 228px;
`;
