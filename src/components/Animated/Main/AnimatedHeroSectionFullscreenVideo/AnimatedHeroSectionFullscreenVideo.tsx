import { FC } from 'react';
import {
  Container,
  StyledReactPlayer,
  Element,
} from './AnimatedHeroSectionFullscreenVideo.styled';
import heroVideo from '@/video/hero.mp4';
import { IProps } from './AnimatedHeroSectionFullscreenVideo.types';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { useIsFirsRender, useIsDesk } from '@/hooks';

const HeroSectionVideo: FC<IProps> = ({
  animationDelay,
  videoInView,
  animationDuration,
  inView,
}) => {
  const isDesk = useIsDesk();
  const { isFirstRender, updateIsFirsRender } = useIsFirsRender();
  const animate: VariantLabels = videoInView
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
      y: isDesk ? '31.5vh' : '27vh',
      width: isDesk ? '41.4vw' : '91.5vw',
      height: isDesk ? '40vh' : '27.6vh',
      transition: {
        ...transition,
        delay: isFirstRender ? animationDelay : 0,
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
      width: isDesk ? '41.4vw' : '91.5vw',
      height: 0,
      transition: {
        ...transition,
        delay: animationDelay,
      },
    },
  };

  return (
    <Container
      animate={animate}
      variants={containerVariants}
      initial='initial'
      onAnimationComplete={updateIsFirsRender}
    >
      <Element variants={elementVariants}>
        <StyledReactPlayer src={heroVideo} muted loop playing />
      </Element>
    </Container>
  );
};

export default HeroSectionVideo;
