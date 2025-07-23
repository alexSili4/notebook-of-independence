import { FC } from 'react';
import AboutSectionContentVideo from '@MainPageComponents/AboutSectionContentVideo';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { Container, Element } from './AnimatedAboutSectionContentVideo.styled';
import { IProps } from './AnimatedAboutSectionContentVideo.types';

const AnimatedAboutSectionContentVideo: FC<IProps> = ({
  animationDuration,
  inView,
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
      y: '100vh',
      transition,
    },
    visible: {
      y: 0,
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <AboutSectionContentVideo />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentVideo;
