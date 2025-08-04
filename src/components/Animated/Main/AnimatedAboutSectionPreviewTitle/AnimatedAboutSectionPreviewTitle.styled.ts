import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)``;

export const Element = styled(motion.span)``;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 387px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 52px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -2.26px;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing()}px;
    max-width: 1027px;
    font-size: 133.13px;
    font-weight: 500;
    line-height: 0.88;
    letter-spacing: -6px;
  }
`;

export const TitlePart = styled.span``;
