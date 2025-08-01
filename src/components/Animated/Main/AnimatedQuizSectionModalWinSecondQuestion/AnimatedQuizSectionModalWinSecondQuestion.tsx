import { FC } from 'react';
import QuizSectionModalWinSecondQuestion from '@MainPageComponents/QuizSectionModalWinSecondQuestion';
import { IProps } from './AnimatedQuizSectionModalWinSecondQuestion.types';
import {
  Container,
  Element,
} from './AnimatedQuizSectionModalWinSecondQuestion.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const AnimatedQuizSectionModalWinSecondQuestion: FC<IProps> = ({
  question,
  index,
  goToNextQuestion,
  inView,
  nextQuestionInView,
  animationDuration,
  animationBounce,
}) => {
  const animate: VariantLabels = nextQuestionInView
    ? 'exit'
    : inView
    ? 'visible'
    : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: animationDuration,
    bounce: animationBounce,
  };

  const elementVariants: Variants = {
    hidden: {
      x: '100%',
      transition,
    },
    visible: {
      x: 0,
      transition,
    },
    exit: {
      x: '-100%',
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <QuizSectionModalWinSecondQuestion
          question={question}
          index={index}
          goToNextQuestion={goToNextQuestion}
        />
      </Element>
    </Container>
  );
};

export default AnimatedQuizSectionModalWinSecondQuestion;
