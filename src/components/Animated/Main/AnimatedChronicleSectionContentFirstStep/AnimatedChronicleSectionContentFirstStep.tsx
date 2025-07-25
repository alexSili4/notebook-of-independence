import { FC } from 'react';
import ChronicleSectionContentFirstStep from '@/components/MainPage/ChronicleSectionContentFirstStep';
import {
  Container,
  Element,
} from './AnimatedChronicleSectionContentFirstStep.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedChronicleSectionContentFirstStep.types';

const AnimatedChronicleSectionContentFirstStep: FC<IProps> = ({
  nextSectionInView,
  animationDuration,
  animationBounce,
  inView,
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
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <ChronicleSectionContentFirstStep />
      </Element>
    </Container>
  );
};

export default AnimatedChronicleSectionContentFirstStep;
