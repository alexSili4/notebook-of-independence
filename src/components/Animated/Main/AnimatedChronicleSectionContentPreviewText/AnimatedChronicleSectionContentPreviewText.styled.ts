import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)``;

export const Element = styled(motion.span)``;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(11)}px;
  height: 100%;
`;

export const Title = styled.h2`
  width: 717px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 150px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -10.33px;
  text-align: center;
  text-transform: uppercase;
`;

export const Text = styled.p`
  width: 582px;
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
`;
