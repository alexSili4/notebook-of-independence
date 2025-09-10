import { FC } from 'react';
import {
  Container,
  Text,
  MarkerWrap,
  Photo,
  PhotoBg,
  PhotoWrap,
  Star,
  Button,
} from './AnimatedAboutSectionContentSlideThird.styled';
import { IProps } from './AnimatedAboutSectionContentSlideThird.types';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import AboutSectionContentImagesMarker from '@MainPageComponents/AboutSectionContentImagesMarker';
import photoBg from '@/images/about/decorative-background-min.png';
import photo from '@/images/about/photo-top-left-min.png';
import star from '@/images/about/decorative-star-min.png';

const AnimatedAboutSectionContentSlideThird: FC<IProps> = ({
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
      x: '-38.1vw',
      transition,
    },
    exit: {
      x: '48.8vw',
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
          <PhotoBg
            src={photoBg}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 27'
          />
          <Photo
            src={photo}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 28'
          />
          <Star
            src={star}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 29'
          />
        </Button>
        <MarkerWrap isHidden={disabledBtn}>
          <AboutSectionContentImagesMarker
            isCurrentStep={playMarkerAnimation}
          />
        </MarkerWrap>
      </PhotoWrap>
      <Text>
        У 1961-му за створення підпільної партії його засудили до розстрілу: 72
        доби провів у камері смертників. Потім вирок замінили на 15 років
        ув’язнення.
        <br />
        <br />
        Загалом Лук’яненко провів у тюрмах і таборах 27 років, із них 450 днів —
        у карцері.
      </Text>
    </Container>
  );
};

export default AnimatedAboutSectionContentSlideThird;
