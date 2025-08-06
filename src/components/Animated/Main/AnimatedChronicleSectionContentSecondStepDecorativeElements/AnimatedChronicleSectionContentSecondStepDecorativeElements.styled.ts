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
  top: 46px;
  left: 23px;
  width: 170px;
  height: 126px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: -40px;
    left: -209px;
    width: 371px;
    height: 276px;
  }
`;

export const PageLight = styled.img`
  position: absolute;
  top: -53px;
  right: -83px;
  width: 295px;
  height: 371px;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;

export const PageDark = styled.img`
  position: absolute;
  z-index: 10;
  top: -4px;
  right: -6px;
  width: 251px;
  height: 263px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: -36px;
    right: -265px;
    width: 493px;
    height: 517px;
  }
`;

export const TextWrap = styled.div`
  position: absolute;
  top: -148px;
  left: -13px;
  width: 333px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    z-index: 10;
    top: 246px;
    left: -173px;
  }
`;

export const Text = styled.p`
  color: #404040;
  font-family: ${({ theme }) => theme.fontFamily.gogol};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.1;
  text-align: center;
`;
