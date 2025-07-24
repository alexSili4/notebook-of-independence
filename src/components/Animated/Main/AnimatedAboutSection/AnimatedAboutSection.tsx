import { FC } from 'react';
import { IProps } from './AnimatedAboutSection.types';
import AboutSection from '@MainPageComponents/AboutSection';
import { Container, Element } from './AnimatedAboutSection.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const AnimatedAboutSection: FC<IProps> = ({
  animationDuration,
  inView,
  contentInView,
  videoInView,
  nextSectionInView,
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
    bounce: 0.4,
  };

  const elementVariants: Variants = {
    hidden: {
      y: '100vh',
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
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <AboutSection
          contentInView={contentInView}
          animationDuration={animationDuration}
          sectionInView={inView}
          videoInView={videoInView}
        />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSection;
