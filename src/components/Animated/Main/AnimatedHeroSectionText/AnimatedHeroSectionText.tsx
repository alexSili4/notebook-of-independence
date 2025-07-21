import { FC } from 'react';
import { IProps } from './AnimatedHeroSectionText.types';
import HeroSectionText from '@MainPageComponents/HeroSectionText';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { Container, Element } from './AnimatedHeroSectionText.styled';

const AnimatedHeroSectionText: FC<IProps> = ({
  animationDelay,
  inView,
  animationDuration,
}) => {
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    duration: animationDuration,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const elementVariants: Variants = {
    hidden: {
      opacity: 0,
      transition,
    },
    visible: {
      opacity: 1,
      transition: {
        ...transition,
        delay: animationDelay,
      },
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <HeroSectionText />
      </Element>
    </Container>
  );
};

export default AnimatedHeroSectionText;
