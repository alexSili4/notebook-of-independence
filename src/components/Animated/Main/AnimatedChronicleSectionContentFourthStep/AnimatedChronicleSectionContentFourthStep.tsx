import { FC } from 'react';
import ChronicleSectionContentFourthStep from '@/components/MainPage/ChronicleSectionContentFourthStep';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import {
  Container,
  Element,
} from './AnimatedChronicleSectionContentFourthStep.styled';
import { IProps } from './AnimatedChronicleSectionContentFourthStep.types';

const AnimatedChronicleSectionContentFourthStep: FC<IProps> = ({
  nextSectionInView,
  animationDuration,
  animationBounce,
  inView,
  isDesk,
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
        <ChronicleSectionContentFourthStep
          animationBounce={animationBounce}
          animationDuration={animationDuration}
          inView={inView}
          isDesk={isDesk}
        />
      </Element>
    </Container>
  );
};

export default AnimatedChronicleSectionContentFourthStep;
