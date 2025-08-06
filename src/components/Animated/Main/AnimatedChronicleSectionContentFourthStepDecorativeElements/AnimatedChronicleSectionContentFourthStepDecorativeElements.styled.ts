import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Element = styled(motion.div)`
  position: relative;
`;

export const PrimaryElement = styled(Element)`
  z-index: 10;
`;

export const Photo = styled.img`
  position: absolute;
  z-index: 10;
  top: -45px;
  left: -261px;
  width: 388px;
  height: 288px;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;

export const Statistics = styled.img`
  position: absolute;
  top: 28px;
  right: 51px;
  width: 218px;
  height: 175px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 96px;
    right: -279px;
    width: 366px;
    height: 294px;
  }
`;

export const Ukraine = styled.img`
  position: absolute;
  z-index: 10;
  top: -95px;
  right: -20px;
  width: 196px;
  height: 144px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: -68px;
    right: -273px;
    width: 313px;
    height: 230px;
  }
`;

export const TextWrap = styled.div`
  position: absolute;
  z-index: 10;
  top: -96px;
  left: -11px;
  width: 176px;
  rotate: -8.72deg;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 244px;
    left: -130px;
    width: 255px;
    rotate: 4.82deg;
  }
`;

export const Text = styled.p`
  color: #404040;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.1;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 20px;
  }
`;
