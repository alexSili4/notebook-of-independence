import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)``;

export const Element = styled(motion.span)``;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()}px;
  width: 1027px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 133.13px;
  font-weight: 500;
  line-height: 0.88;
  letter-spacing: -6px;
  text-align: center;
  text-transform: uppercase;
`;

export const TitlePart = styled.span``;
