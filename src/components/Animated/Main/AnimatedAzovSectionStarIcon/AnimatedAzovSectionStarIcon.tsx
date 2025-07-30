import { FC, useEffect } from 'react';
import {
  Container,
  Element,
  StarIcon,
} from './AnimatedAzovSectionStarIcon.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedAzovSectionStarIcon.types';

const AnimatedAzovSectionStarIcon: FC<IProps> = ({
  animationDuration,
  inView,
}) => {
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  useEffect(() => {
    console.log('AnimatedAzovSectionStarIcon: ', animationDuration);
  });

  const transition: Transition = {
    type: 'spring',
    duration: animationDuration,
    bounce: 0,
  };

  const elementVariants: Variants = {
    hidden: {
      width: 0,
      transition,
    },
    visible: {
      width: '100%',
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <StarIcon />
      </Element>
    </Container>
  );
};

export default AnimatedAzovSectionStarIcon;
