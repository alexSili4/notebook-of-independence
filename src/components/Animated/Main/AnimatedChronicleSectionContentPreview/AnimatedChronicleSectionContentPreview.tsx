import { FC } from 'react';
import ChronicleSectionContentPreview from '@/components/MainPage/ChronicleSectionContentPreview';
import {
  Container,
  Element,
} from './AnimatedChronicleSectionContentPreview.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedChronicleSectionContentPreview.types';

const AnimatedChronicleSectionContentPreview: FC<IProps> = ({
  nextSectionInView,
  animationDuration,
  inView,
  animationBounce,
}) => {
  const animate: VariantLabels = nextSectionInView ? 'hidden' : 'visible';

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
    visible: {
      x: 0,
      transition,
    },
    hidden: {
      x: '-100%',
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>
        <ChronicleSectionContentPreview
          animationDuration={animationDuration}
          inView={inView}
          animationBounce={animationBounce}
        />
      </Element>
    </Container>
  );
};

export default AnimatedChronicleSectionContentPreview;
