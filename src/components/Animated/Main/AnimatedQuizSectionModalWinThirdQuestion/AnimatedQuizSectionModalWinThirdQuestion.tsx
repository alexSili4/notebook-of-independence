import { FC } from 'react';
import QuizSectionModalWinThirdQuestion from '@MainPageComponents/QuizSectionModalWinThirdQuestion';
import { IProps } from './AnimatedQuizSectionModalWinThirdQuestion.types';
import {
  Container,
  Element,
} from './AnimatedQuizSectionModalWinThirdQuestion.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const AnimatedQuizSectionModalWinThirdQuestion: FC<IProps> = ({
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
        <QuizSectionModalWinThirdQuestion
          question={question}
          index={index}
          goToNextQuestion={goToNextQuestion}
        />
      </Element>
    </Container>
  );
};

export default AnimatedQuizSectionModalWinThirdQuestion;
