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
  sectionAnimationDuration,
  sectionAnimationBounce,
  exitAnimationDuration,
  exitAnimationBounce,
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
    duration: isDesk ? sectionAnimationDuration : 2.5,
    bounce: isDesk ? sectionAnimationBounce : 0.4,
  };

  const elementVariants: Variants = {
    hidden: {
      y: '100lvh',
      x: 0,
      transition,
    },
    visible: {
      y: 0,
      x: 0,
      transition,
    },
    exit: {
      y: isDesk ? 0 : '-100%',
      x: isDesk ? '-100%' : 0,
      transition: {
        ...transition,
        duration: isDesk ? exitAnimationDuration : 2.5,
        bounce: isDesk ? exitAnimationBounce : 0.4,
      },
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
          isDesk={isDesk}
        />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSection;
