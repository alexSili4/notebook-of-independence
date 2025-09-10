import { FC } from 'react';
import {
  Container,
  Photo,
  Text,
  PhotoWrap,
} from './AnimatedAboutSectionContentSlideFirst.styled';
import photo from '@/images/about/photo-bottom-center-min.png';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedAboutSectionContentSlideFirst.types';

const AnimatedAboutSectionContentSlideFirst: FC<IProps> = ({
  animationDuration,
  nextSlideInView,
  containerRef,
}) => {
  const animate: VariantLabels = nextSlideInView ? 'hidden' : 'visible';

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
      x: '51vw',
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
      initial='visible'
    >
      <PhotoWrap variants={elementVariants}>
        <Photo
          src={photo}
          alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 24'
        />
      </PhotoWrap>
      <Text>
        Левко Лук’яненко — автор Акта проголошення незалежності України.
        <br />
        <br />
        Народився 24 серпня 1928 року в селі на Чернігівщині. Неповнолітнім
        потрапив до армії, де йому приписали зайвий рік — відтоді в документах
        залишився 1927-й як рік народження
      </Text>
    </Container>
  );
};

export default AnimatedAboutSectionContentSlideFirst;
