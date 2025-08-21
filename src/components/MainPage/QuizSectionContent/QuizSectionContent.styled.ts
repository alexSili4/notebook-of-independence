import styled from '@emotion/styled';
import Accent from '@/icons/quiz/accent.svg?react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)}px;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(24)}px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.desk - 1}px) {
    width: 343px;
  }
`;

export const Title = styled.h2`
  color: #6983d0;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 40px;
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -2px;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 1005px;
    font-size: 100px;
    font-weight: 700;
    letter-spacing: -8px;
  }
`;

export const Text = styled.p`
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 630px;
    font-size: 20px;
  }
`;

export const ShowQuizBtnWrap = styled.div`
  position: relative;
`;

export const ShowQuizBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 222px;
  height: 46px;
  padding: 0;
  border: none;
  border-radius: 100px;
  background-color: #2f2f2f;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const AccentIcon = styled(Accent)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 234px;
  opacity: 0;
  translate: -50% -50%;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.all};
  pointer-events: none;

  div:has(button:is(:hover, :focus)) > & {
    opacity: 1;
  }
`;
