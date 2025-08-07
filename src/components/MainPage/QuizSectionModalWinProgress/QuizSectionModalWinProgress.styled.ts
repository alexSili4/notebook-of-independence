import styled from '@emotion/styled';
import { IStyledProgressProps } from './QuizSectionModalWinProgress.types';

export const Container = styled.div`
  position: absolute;
  top: 81px;
  left: 50%;
  translate: -50% 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: 96px;
  }
`;

export const QuestionWrap = styled.div`
  position: absolute;
  top: 50%;
  translate: 0 -50%;
`;

export const CurrentQuestionWrap = styled(QuestionWrap)`
  right: calc(100% + 16px);
`;

export const QuestionNumber = styled.p`
  color: #2f2f2f;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 16px;
  }
`;

export const ProgressWrap = styled.div`
  position: relative;
  width: 190px;
  height: 4px;
  border-radius: 100px;
  background-color: rgba(47, 47, 47, 0.4);
  overflow: hidden;
`;

export const Progress = styled.div<IStyledProgressProps>`
  position: absolute;
  top: 0;
  right: 100%;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: #2f2f2f;
  translate: ${({ translateX }) => translateX}% 0;
  transition: translate ${({ theme }) => theme.transitionDurationAndFunc.all};
`;

export const TotalQuestionsWrap = styled(QuestionWrap)`
  left: calc(100% + 16px);
`;
