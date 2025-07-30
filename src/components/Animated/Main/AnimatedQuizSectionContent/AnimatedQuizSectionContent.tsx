import { FC } from 'react';
import QuizSectionContent from '@MainPageComponents/QuizSectionContent';
import { IProps } from './AnimatedQuizSectionContent.types';
import { Container, Element } from './AnimatedQuizSectionContent.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const AnimatedQuizSectionContent: FC<IProps> = ({
  onShowQuizBtnClick,
  animationDuration,
  inView,
}) => {
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
      y: 200,
      x: 0,
      opacity: 0,
      transition,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <QuizSectionContent onShowQuizBtnClick={onShowQuizBtnClick} />
      </Element>
    </Container>
  );
};

export default AnimatedQuizSectionContent;
