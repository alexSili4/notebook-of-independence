import { FC } from 'react';
import AnimatedHeroSectionFullscreenVideo from '@AnimatedMainPageComponents/AnimatedHeroSectionFullscreenVideo';
import { Container, Element } from './AnimatedHeroSectionVideo.styled';
import { IProps } from './AnimatedHeroSectionVideo.types';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const AnimatedHeroSectionVideo: FC<IProps> = ({
  animationDelay,
  inView,
  animationDuration,
  isFullScreen,
}) => {
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: animationDuration,
    bounce: 0.6,
  };

  const elementVariants: Variants = {
    hidden: {
      y: '40vh',
      transition,
    },
    visible: {
      y: 0,
      transition: {
        ...transition,
        delay: animationDelay,
      },
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <AnimatedHeroSectionFullscreenVideo
          inView={inView}
          animationDelay={animationDelay}
          isFullScreen={isFullScreen}
          animationDuration={animationDuration}
        />
      </Element>
    </Container>
  );
};

export default AnimatedHeroSectionVideo;
