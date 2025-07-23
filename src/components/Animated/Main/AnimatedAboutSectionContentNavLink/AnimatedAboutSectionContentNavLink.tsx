import { FC } from 'react';
import AboutSectionContentNavLink from '@MainPageComponents/AboutSectionContentNavLink';
import {
  Container,
  Element,
} from './AnimatedAboutSectionContentNavLink.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedAboutSectionContentNavLink.types';

const AnimatedAboutSectionContentNavLink: FC<IProps> = ({
  inView,
  animationDuration,
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
      x: '100%',
      y: '100%',
      transition,
    },
    visible: {
      x: 0,
      y: 0,
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>
        <AboutSectionContentNavLink />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentNavLink;
