import { FC } from 'react';
import QuizSectionModalWinFifthQuestion from '@MainPageComponents/QuizSectionModalWinFifthQuestion';
import { IProps } from './AnimatedQuizSectionModalWinFifthQuestion.types';
import {
  Container,
  Element,
} from './AnimatedQuizSectionModalWinFifthQuestion.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const AnimatedQuizSectionModalWinFifthQuestion: FC<IProps> = ({
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
        <QuizSectionModalWinFifthQuestion
          question={question}
          index={index}
          goToNextQuestion={goToNextQuestion}
        />
      </Element>
    </Container>
  );
};

export default AnimatedQuizSectionModalWinFifthQuestion;
