import { FC } from 'react';
import {
  Container,
  MarkerWrap,
  Photo,
  PhotoWrap,
  Text,
  Image,
  Button,
} from './AnimatedAboutSectionContentSlideFifth.styled';
import photo from '@/images/about/decorative-photo-min.png';
import image from '@/images/about/photo-top-right-min.png';
import AboutSectionContentImagesMarker from '@MainPageComponents/AboutSectionContentImagesMarker';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedAboutSectionContentSlideFifth.types';

const AnimatedAboutSectionContentSlideFifth: FC<IProps> = ({
  animationDuration,
  containerRef,
  inView,
  playMarkerAnimation,
  onNextBtnClick,
}) => {
  const disabledBtn = inView;
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
      x: '-57.3vw',
      transition,
    },
    visible: {
      x: 0,
      transition,
    },
  };

  return (
    <Container
      ref={containerRef}
      animate={animate}
      variants={containerVariants}
      initial='hidden'
    >
      <PhotoWrap variants={elementVariants}>
        <Button type='button' onClick={onNextBtnClick} disabled={disabledBtn}>
          <Photo src={photo} alt='' />
          <Image src={image} alt='' />
        </Button>
        <MarkerWrap isHidden={disabledBtn}>
          <AboutSectionContentImagesMarker
            isCurrentStep={playMarkerAnimation}
          />
        </MarkerWrap>
      </PhotoWrap>
      <Text>
        Якби моє життя закінчилось прямо зараз, я б знав, що прожив його не
        марно», — сказав він в день ухвалення незалежності.
        <br />
        <br />
        Помер 7 липня 2018 р., не доживши півтора місяці до свого 90-річчя.
        Похований на Байковому кладовищі.
      </Text>
    </Container>
  );
};

export default AnimatedAboutSectionContentSlideFifth;
