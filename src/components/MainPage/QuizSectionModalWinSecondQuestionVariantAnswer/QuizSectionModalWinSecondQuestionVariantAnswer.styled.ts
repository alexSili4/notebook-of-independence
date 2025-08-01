import styled from '@emotion/styled';
import { IStyledAnswerProps } from './QuizSectionModalWinSecondQuestionVariantAnswer.types';

export const Answer = styled.span<IStyledAnswerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)}px;
  width: 100%;
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing(31)}px;
  background-color: ${({ isBlueBg }) => (isBlueBg ? '#6983D0' : '#E4BB60')};
`;

export const Text = styled.span`
  width: 210px;
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  line-height: 1.28;
`;
