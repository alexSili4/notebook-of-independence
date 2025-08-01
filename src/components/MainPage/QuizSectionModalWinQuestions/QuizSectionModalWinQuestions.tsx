import { FC } from 'react';
import { IProps } from './QuizSectionModalWinQuestions.types';
import { Container, Content } from './QuizSectionModalWinQuestions.styled';
import AnimatedQuizSectionModalWinFirstQuestion from '@AnimatedMainPageComponents/AnimatedQuizSectionModalWinFirstQuestion';
import AnimatedQuizSectionModalWinSecondQuestion from '@AnimatedMainPageComponents/AnimatedQuizSectionModalWinSecondQuestion';

const QuizSectionModalWinQuestions: FC<IProps> = ({
  questions,
  goToNextQuestion,
  animationBounce,
  animationDuration,
  firstQuestionInView,
  secondQuestionInView,
  thirdQuestionInView,
}) => {
  return (
    <Container>
      <Content>
        <AnimatedQuizSectionModalWinFirstQuestion
          question={questions[0]}
          index={0}
          goToNextQuestion={goToNextQuestion}
          animationBounce={animationBounce}
          animationDuration={animationDuration}
          inView={firstQuestionInView}
          nextQuestionInView={secondQuestionInView}
        />
        <AnimatedQuizSectionModalWinSecondQuestion
          question={questions[1]}
          index={1}
          goToNextQuestion={goToNextQuestion}
          animationBounce={animationBounce}
          animationDuration={animationDuration}
          inView={secondQuestionInView}
          nextQuestionInView={thirdQuestionInView}
        />
      </Content>
    </Container>
  );
};

export default QuizSectionModalWinQuestions;
