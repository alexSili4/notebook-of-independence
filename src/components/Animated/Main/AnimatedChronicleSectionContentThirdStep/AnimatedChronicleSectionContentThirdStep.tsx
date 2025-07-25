import { FC } from 'react';
import {
  Container,
  Element,
} from './AnimatedChronicleSectionContentThirdStep.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedChronicleSectionContentThirdStep.types';
import ChronicleSectionContentThirdStep from '@/components/MainPage/ChronicleSectionContentThirdStep';

const AnimatedChronicleSectionContentThirdStep: FC<IProps> = ({
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
        <ChronicleSectionContentThirdStep
          animationBounce={animationBounce}
          animationDuration={animationDuration}
          inView={inView}
        />
      </Element>
    </Container>
  );
};

export default AnimatedChronicleSectionContentThirdStep;
