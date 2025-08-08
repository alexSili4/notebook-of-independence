import styled from '@emotion/styled';
import { IStyledAnswerProps } from './QuizSectionModalWinFourthQuestionVariantAnswer.types';

export const Answer = styled.span<IStyledAnswerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
  width: 100%;
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing(16)}px;
  background-color: ${({ isBlueBg }) => (isBlueBg ? '#6983D0' : '#E4BB60')};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    padding-top: ${({ theme }) => theme.spacing(31)}px;
  }
`;

export const Text = styled.span`
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 20px;
  }
`;
