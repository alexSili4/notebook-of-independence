import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: relative;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    z-index: 10;
  }
`;

export const Element = styled(motion.div)``;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(11)}px;
  }
`;

export const Title = styled.h2`
  width: 343px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 64px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -2px;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 717px;
    font-size: 150px;
    letter-spacing: -10.33px;
  }
`;

export const Text = styled.p`
  width: 343px;
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 582px;
  }
`;
