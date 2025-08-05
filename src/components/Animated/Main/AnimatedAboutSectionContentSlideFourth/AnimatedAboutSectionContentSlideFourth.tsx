import { FC } from 'react';
import {
  Button,
  Container,
  MarkerWrap,
  Photo,
  PhotoWrap,
  Text,
} from './AnimatedAboutSectionContentSlideFourth.styled';
import photo from '@/images/about/photo-bottom-left.png';
import AboutSectionContentImagesMarker from '@MainPageComponents/AboutSectionContentImagesMarker';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedAboutSectionContentSlideFourth.types';

const AnimatedAboutSectionContentSlideFourth: FC<IProps> = ({
  animationDuration,
  containerRef,
  inView,
  nextSlideInView,
  playMarkerAnimation,
  onNextBtnClick,
}) => {
  const disabledBtn = inView || nextSlideInView;
  const animate: VariantLabels = inView
    ? 'visible'
    : nextSlideInView
    ? 'exit'
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
      x: '-48.8vw',
      transition,
    },
    exit: {
      x: '57.3vw',
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
        </Button>
        <MarkerWrap isHidden={disabledBtn}>
          <AboutSectionContentImagesMarker
            isCurrentStep={playMarkerAnimation}
          />
        </MarkerWrap>
      </PhotoWrap>
      <Text>
        У 1990-му став народним депутатом. У серпні 1991 року саме його рукою
        був написаний текст Акта проголошення незалежності України.
        <br />
        <br />
        24 серпня 1991 року документ ухвалила Верховна Рада. У день, коли
        Україна здобула незалежність, Левко Лук’яненко святкував 63-й день
        народження.
      </Text>
    </Container>
  );
};

export default AnimatedAboutSectionContentSlideFourth;
