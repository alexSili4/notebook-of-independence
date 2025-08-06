import { FC } from 'react';
import QuizSection from '@MainPageComponents/QuizSection';
import { Container, Element } from './AnimatedQuizSection.styled';
import { IProps } from './AnimatedQuizSection.types';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const AnimatedQuizSection: FC<IProps> = ({ animationDuration, inView }) => {
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: animationDuration,
    bounce: 0.4,
  };

  const elementVariants: Variants = {
    hidden: {
      y: '100lvh',
      x: 0,
      transition,
    },
    visible: {
      y: 0,
      x: 0,
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <QuizSection animationDuration={animationDuration} inView={inView} />
      </Element>
    </Container>
  );
};

export default AnimatedQuizSection;
