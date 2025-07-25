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
  top: 147px;
  left: -248px;
  width: 189px;
  height: 189px;
`;

export const TextWrap = styled.div`
  position: absolute;
  top: -17px;
  left: -221px;
  width: 362px;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(18)}px ${spacing(15)}px ${spacing(19)}px ${spacing(13)}px`};
  background-image: url(${textBg});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  rotate: -10.28deg;
`;

export const Text = styled.p`
  color: #404040;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 22px;
  font-weight: 400;
  line-height: 1.1;
  text-align: center;
`;

export const PhotoWrap = styled.div`
  position: absolute;
  top: -36px;
  right: -273px;
`;

export const Photo = styled.img`
  width: 501px;
  height: 372px;
`;

export const PhotoDescWrap = styled.div`
  position: absolute;
  top: 327px;
  left: 102px;
`;

export const PhotoDesc = styled.p`
  color: #404040;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.1;
  text-align: center;
`;
