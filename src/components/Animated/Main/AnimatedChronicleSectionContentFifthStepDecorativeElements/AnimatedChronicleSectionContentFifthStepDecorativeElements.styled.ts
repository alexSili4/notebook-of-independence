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

export const PhotoLeft = styled.img`
  position: absolute;
  top: -75px;
  left: -220px;
  width: 414px;
  height: 311px;
`;

export const PhotoRight = styled.img`
  position: absolute;
  top: 11px;
  right: -208px;
  width: 306px;
  height: 372px;
`;

export const BlueColor = styled.img`
  position: absolute;
  top: -76px;
  right: 82px;
  width: 135px;
  height: 171px;
`;

export const YellowColor = styled.img`
  position: absolute;
  top: -40px;
  right: -12px;
  width: 140px;
  height: 174px;
`;

export const TextWrap = styled.div`
  position: absolute;
  top: -98px;
  left: 47px;
  width: 271px;
  rotate: 9.09deg;
`;

export const Text = styled.p`
  color: #6983d0;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.1;
  text-align: center;
`;
