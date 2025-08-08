import { FC } from 'react';
import { IProps } from './QuizSectionModalWinQuestions.types';
import { Container, Content } from './QuizSectionModalWinQuestions.styled';
import AnimatedQuizSectionModalWinFirstQuestion from '@AnimatedMainPageComponents/AnimatedQuizSectionModalWinFirstQuestion';
import AnimatedQuizSectionModalWinSecondQuestion from '@AnimatedMainPageComponents/AnimatedQuizSectionModalWinSecondQuestion';
import AnimatedQuizSectionModalWinThirdQuestion from '@AnimatedMainPageComponents/AnimatedQuizSectionModalWinThirdQuestion';
import AnimatedQuizSectionModalWinFourthQuestion from '@AnimatedMainPageComponents/AnimatedQuizSectionModalWinFourthQuestion';
import AnimatedQuizSectionModalWinFifthQuestion from '@AnimatedMainPageComponents/AnimatedQuizSectionModalWinFourthQuestion';

const QuizSectionModalWinQuestions: FC<IProps> = ({
  questions,
  goToNextQuestion,
  animationBounce,
  animationDuration,
  firstQuestionInView,
  secondQuestionInView,
  thirdQuestionInView,
  fifthQuestionInView,
  fourthQuestionInView,
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
        <AnimatedQuizSectionModalWinThirdQuestion
          question={questions[2]}
          index={2}
          goToNextQuestion={goToNextQuestion}
          animationBounce={animationBounce}
          animationDuration={animationDuration}
          inView={thirdQuestionInView}
          nextQuestionInView={fourthQuestionInView}
        />
        <AnimatedQuizSectionModalWinFourthQuestion
          question={questions[3]}
          index={3}
          goToNextQuestion={goToNextQuestion}
          animationBounce={animationBounce}
          animationDuration={animationDuration}
          inView={fourthQuestionInView}
          nextQuestionInView={fifthQuestionInView}
        />
        <AnimatedQuizSectionModalWinFifthQuestion
          question={questions[4]}
          index={4}
          goToNextQuestion={goToNextQuestion}
          animationBounce={animationBounce}
          animationDuration={animationDuration}
          inView={fifthQuestionInView}
          nextQuestionInView={false}
        />
      </Content>
    </Container>
  );
};

export default QuizSectionModalWinQuestions;
