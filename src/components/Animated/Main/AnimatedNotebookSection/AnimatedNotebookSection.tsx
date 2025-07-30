import { FC } from 'react';
import NotebookSection from '@MainPageComponents/NotebookSection';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { Container, Element } from './AnimatedNotebookSection.styled';
import { IProps } from './AnimatedNotebookSection.types';

const AnimatedNotebookSection: FC<IProps> = ({
  animationDuration,
  animationBounce,
  inView,
  nextSectionInView,
  exitAnimationDuration,
  exitAnimationBounce,
}) => {
  const animate: VariantLabels = nextSectionInView
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
      transition: {
        ...transition,
        duration: exitAnimationDuration,
        bounce: exitAnimationBounce,
      },
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <NotebookSection
          animationBounce={animationBounce}
          animationDuration={animationDuration}
          inView={inView}
        />
      </Element>
    </Container>
  );
};

export default AnimatedNotebookSection;
