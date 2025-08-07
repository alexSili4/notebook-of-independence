import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const InfoWrap = styled(motion.div)`
  position: absolute;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 85px;
    right: 73px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    bottom: 28px;
    left: 35px;
  }
`;

export const InfoElement = styled(motion.div)`
  overflow: hidden;
`;

export const Info = styled.img`
  width: 71px;
  max-width: 71px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 144px;
    max-width: 144px;
  }
`;

export const LightWrap = styled(motion.div)`
  position: absolute;
  width: 124px;
  height: 120px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    bottom: 123px;
    left: 81px;
    width: 236px;
    height: 228px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    top: 7px;
    right: 9px;
  }
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
  width: 124px;
  max-width: 124px;
  height: 120px;
`;
