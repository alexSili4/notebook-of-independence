import { FC } from 'react';
import { IProps } from './AnimatedChronicleSectionContentSecondStep.types';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import ChronicleSectionContentSecondStep from '@/components/MainPage/ChronicleSectionContentSecondStep';
import {
  Container,
  Element,
} from './AnimatedChronicleSectionContentSecondStep.styled';

const AnimatedChronicleSectionContentSecondStep: FC<IProps> = ({
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
        <ChronicleSectionContentSecondStep />
      </Element>
    </Container>
  );
};

export default AnimatedChronicleSectionContentSecondStep;
