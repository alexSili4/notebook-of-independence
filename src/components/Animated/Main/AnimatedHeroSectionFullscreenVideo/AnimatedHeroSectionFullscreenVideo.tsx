import { FC, useEffect, useState } from 'react';
import {
  Container,
  Video,
  Element,
  MutedBtn,
  VolumeHighIcon,
  VolumeMuteIcon,
} from './AnimatedHeroSectionFullscreenVideo.styled';
import heroVideo from '@/video/hero.mp4';
import { IProps } from './AnimatedHeroSectionFullscreenVideo.types';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { useIsFirsRender } from '@/hooks';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const HeroSectionVideo: FC<IProps> = ({
  animationDelay,
  videoInView,
  animationDuration,
  inView,
  isDesk,
  nextSectionInView,
}) => {
  const [muted, setMuted] = useState<boolean>(false);
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
      y: isDesk ? '31.5lvh' : '27lvh',
      width: isDesk ? '41.4vw' : '91.5vw',
      height: isDesk ? '40lvh' : '27.6lvh',
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
      y: '50lvh',
      width: isDesk ? '41.4vw' : '91.5vw',
      height: 0,
      transition: {
        ...transition,
        delay: animationDelay,
      },
    },
  };

  const toggleMuted = () => {
    setMuted((prevState) => !prevState);
  };

  const onMutedBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleMuted();
  };

  useEffect(() => {
    setMuted(true);
  }, []);

  useEffect(() => {
    if (nextSectionInView && !muted) {
      setMuted(true);
    }
  }, [nextSectionInView, muted]);

  return (
    <Container
      animate={animate}
      variants={containerVariants}
      initial='initial'
      onAnimationComplete={updateIsFirsRender}
    >
      <Element variants={elementVariants}>
        <Video
          src={heroVideo}
          muted={muted}
          loop
          autoPlay
          playsInline
          webkit-playsinline='true'
        ></Video>
        <MutedBtn type='button' onClick={onMutedBtnClick} inView={videoInView}>
          <VolumeHighIcon show={muted} />
          <VolumeMuteIcon show={!muted} />
        </MutedBtn>
      </Element>
    </Container>
  );
};

export default HeroSectionVideo;
