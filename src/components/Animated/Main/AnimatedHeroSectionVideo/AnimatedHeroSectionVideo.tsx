import { FC } from 'react';
import AnimatedHeroSectionFullscreenVideo from '@AnimatedMainPageComponents/AnimatedHeroSectionFullscreenVideo';
import { Container, Element } from './AnimatedHeroSectionVideo.styled';
import { IProps } from './AnimatedHeroSectionVideo.types';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const AnimatedHeroSectionVideo: FC<IProps> = ({
  animationDelay,
  inView,
  animationDuration,
  videoInView,
  isDesk,
  nextSectionInView,
}) => {
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: animationDuration,
    bounce: 0,
  };

  const elementVariants: Variants = {
    hidden: {
      y: '40lvh',
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
        <AnimatedHeroSectionFullscreenVideo
          inView={inView}
          animationDelay={animationDelay}
          videoInView={videoInView}
          animationDuration={animationDuration}
          isDesk={isDesk}
          nextSectionInView={nextSectionInView}
        />
      </Element>
    </Container>
  );
};

export default AnimatedHeroSectionVideo;
