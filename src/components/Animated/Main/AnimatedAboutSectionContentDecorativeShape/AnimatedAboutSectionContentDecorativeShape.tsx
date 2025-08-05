import { FC } from 'react';
import {
  Container,
  Element,
  DecorativeShape,
} from './AnimatedAboutSectionContentDecorativeShape.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedAboutSectionContentDecorativeShape.types';
import { useIsDesk } from '@/hooks';

const AnimatedAboutSectionContentDecorativeShape: FC<IProps> = ({
  animationDuration,
  inView,
}) => {
  const isDesk = useIsDesk();
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
      x: 0,
      y: 0,
      transition,
    },
    visible: {
      x: isDesk ? '-40%' : 0,
      y: isDesk ? 0 : '-40%',
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <DecorativeShape></DecorativeShape>
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentDecorativeShape;
