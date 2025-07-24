import styled from '@emotion/styled';
import PersonalSignature from '@/icons/hero/personal-signature.svg?react';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  top: 27px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 234px;
  height: 138px;
`;

export const Element = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PersonalSignatureIcon = styled(PersonalSignature)`
  flex-shrink: 0;
  width: 234px;
  height: 138px;
`;
