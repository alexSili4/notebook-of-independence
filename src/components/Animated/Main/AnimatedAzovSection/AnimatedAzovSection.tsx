import { FC } from 'react';
import AzovSection from '@MainPageComponents/AzovSection';
import { Container, Element } from './AnimatedAzovSection.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedAzovSection.types';

const AnimatedAzovSection: FC<IProps> = ({
  animationDuration,
  inView,
  animationBounce,
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
      y: '100lvh',
      x: 0,
      transition,
    },
    visible: {
      y: 0,
      x: 0,
      transition,
    },
    exit: {
      y: 0,
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
        <AzovSection animationDuration={animationDuration} inView={inView} />
      </Element>
    </Container>
  );
};

export default AnimatedAzovSection;
