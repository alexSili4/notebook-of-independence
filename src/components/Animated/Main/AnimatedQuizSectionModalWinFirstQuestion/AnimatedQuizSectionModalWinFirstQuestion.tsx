import { FC } from 'react';
import QuizSectionModalWinFirstQuestion from '@MainPageComponents/QuizSectionModalWinFirstQuestion';
import { IProps } from './AnimatedQuizSectionModalWinFirstQuestion.types';
import {
  Container,
  Element,
} from './AnimatedQuizSectionModalWinFirstQuestion.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const AnimatedQuizSectionModalWinFirstQuestion: FC<IProps> = ({
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
        <QuizSectionModalWinFirstQuestion
          question={question}
          index={index}
          goToNextQuestion={goToNextQuestion}
        />
      </Element>
    </Container>
  );
};

export default AnimatedQuizSectionModalWinFirstQuestion;
