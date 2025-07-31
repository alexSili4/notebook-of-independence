import { FC } from 'react';
import { IProps } from './QuizSectionModalWinProgress.types';
import {
  Container,
  QuestionNumber,
  CurrentQuestionWrap,
  Progress,
  ProgressWrap,
  TotalQuestionsWrap,
} from './QuizSectionModalWinProgress.styled';

const QuizSectionModalWinProgress: FC<IProps> = ({
  currentQuestion,
  progress,
  totalQuestions,
}) => {
  return (
    <Container>
      <CurrentQuestionWrap>
        <QuestionNumber>{currentQuestion}</QuestionNumber>
      </CurrentQuestionWrap>
      <ProgressWrap>
        <Progress translateX={progress}></Progress>
      </ProgressWrap>
      <TotalQuestionsWrap>
        <QuestionNumber>{totalQuestions}</QuestionNumber>
      </TotalQuestionsWrap>
    </Container>
  );
};

export default QuizSectionModalWinProgress;
