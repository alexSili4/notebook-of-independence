import { FC } from 'react';
import {
  Container,
  StyledReactPlayer,
  Element,
} from './AnimatedHeroSectionFullscreenVideo.styled';
import heroVideo from '@/video/hero.mp4';
import { IProps } from './AnimatedHeroSectionFullscreenVideo.types';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const HeroSectionVideo: FC<IProps> = ({
  animationDelay,
  isFullScreen,
  animationDuration,
  inView,
}) => {
  const animate: VariantLabels = isFullScreen
    ? 'visible'
    : inView
    ? 'hidden'
    : 'initial';
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
      y: '31.5vh',
      width: '41.4vw',
      height: '40vh',
      transition: {
        ...transition,
        delay: animationDelay,
      },
    },
    visible: {
      y: 0,
      width: '100%',
      height: '100%',
      transition,
    },
    initial: {
      y: '50vh',
      width: '41.4vw',
      height: 0,
      transition: {
        ...transition,
        delay: animationDelay,
      },
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='initial'>
      <Element variants={elementVariants}>
        <StyledReactPlayer src={heroVideo} muted loop playing />
      </Element>
    </Container>
  );
};

export default HeroSectionVideo;
