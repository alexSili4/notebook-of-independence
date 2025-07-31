import styled from '@emotion/styled';
import { IStyledAnswerProps } from './QuizSectionModalWinFirstQuestionVariantAnswer.types';

export const Answer = styled.span<IStyledAnswerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)}px;
  width: 100%;
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing(15)}px;
  background-color: ${({ isBlueBg }) => (isBlueBg ? '#6983D0' : '#E4BB60')};
`;

export const Photo = styled.img`
  width: 160px;
  height: 160px;
`;

export const Text = styled.span`
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.28;
`;
