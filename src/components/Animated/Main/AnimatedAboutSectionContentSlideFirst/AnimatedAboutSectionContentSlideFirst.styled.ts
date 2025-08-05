import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: relative;
  height: 100lvh;
  padding-top: ${({ theme }) => theme.spacing(61)}px;
  padding-left: ${({ theme }) => theme.spacing(8)}px;
`;

export const PhotoWrap = styled(motion.div)`
  position: absolute;
  top: 27px;
  left: 0.8vw;
`;

export const Photo = styled.img`
  width: 269px;
  height: 270px;
`;

export const Text = styled.p`
  width: 330px;
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.08;
`;
