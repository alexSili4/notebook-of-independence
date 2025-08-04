import { FC } from 'react';
import QuizSectionModalWinResult from '@MainPageComponents/QuizSectionModalWinResult';
import { Container, Element } from './AnimatedQuizSectionModalWinResult.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedQuizSectionModalWinResult.types';

const AnimatedQuizSectionModalWinResult: FC<IProps> = ({
  inView,
  totalQuestions,
  totalScore,
}) => {
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: 4,
    bounce: 0.2,
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
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <QuizSectionModalWinResult
          totalQuestions={totalQuestions}
          totalScore={totalScore}
        />
      </Element>
    </Container>
  );
};

export default AnimatedQuizSectionModalWinResult;
