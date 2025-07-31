import { FC } from 'react';
import { IProps } from './QuizSectionModalWinQuestions.types';
import QuizSectionModalWinFirstQuestion from '@MainPageComponents/QuizSectionModalWinFirstQuestion';
import QuizSectionModalWinQuestionsNextBtn from '@MainPageComponents/QuizSectionModalWinQuestionsNextBtn';
import { questions } from '@/constants';
import { Container } from './QuizSectionModalWinQuestions.styled';

const QuizSectionModalWinQuestions: FC<IProps> = ({
  containerRef,
  incrementCurrentQuestion,
  incrementTotalScore,
}) => {
  return (
    <Container ref={containerRef}>
      <QuizSectionModalWinFirstQuestion
        question={questions[1]}
        incrementCurrentQuestion={incrementCurrentQuestion}
        incrementTotalScore={incrementTotalScore}
      />
      <QuizSectionModalWinQuestionsNextBtn />
    </Container>
  );
};

export default QuizSectionModalWinQuestions;
