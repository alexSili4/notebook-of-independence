import styled from '@emotion/styled';
import textBg from '@/images/chronicle/firstStep/text-bg.png';
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

export const Image = styled.img`
  position: absolute;
  top: -128px;
  left: 146px;
  width: 98px;
  height: 98px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 147px;
    left: -248px;
    width: 189px;
    height: 189px;
  }
`;

export const TextWrap = styled.div`
  position: absolute;
  top: -119px;
  left: -20px;
  width: 218px;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(8)}px ${spacing(9)}px ${spacing(10)}px ${spacing(8)}px`};
  background-image: url(${textBg});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  rotate: -10.28deg;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: -17px;
    left: -221px;
    width: 362px;
    padding: ${({ theme: { spacing } }) =>
      `${spacing(18)}px ${spacing(15)}px ${spacing(19)}px ${spacing(13)}px`};
  }
`;

export const Text = styled.p`
  color: #404040;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.1;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 22px;
  }
`;

export const PhotoWrap = styled.div`
  position: absolute;
  top: 57px;
  right: -19px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: -36px;
    right: -273px;
  }
`;

export const Photo = styled.img`
  width: 231px;
  height: 172px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 501px;
    height: 372px;
  }
`;

export const PhotoDescWrap = styled.div`
  position: absolute;
  top: 327px;
  left: 102px;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;

export const PhotoDesc = styled.p`
  color: #404040;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.1;
  text-align: center;
`;
