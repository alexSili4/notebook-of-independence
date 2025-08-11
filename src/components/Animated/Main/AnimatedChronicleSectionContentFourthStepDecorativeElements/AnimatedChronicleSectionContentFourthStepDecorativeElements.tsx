import { FC } from 'react';
import photo from '@/images/chronicle/fourthStep/photo-min.png';
import statistics from '@/images/chronicle/fourthStep/statistics-min.png';
import ukraine from '@/images/chronicle/fourthStep/ukraine-min.png';
import {
  Photo,
  Statistics,
  Text,
  TextWrap,
  Ukraine,
  Container,
  Element,
  PrimaryElement,
} from './AnimatedChronicleSectionContentFourthStepDecorativeElements.styled';
import { IProps } from './AnimatedChronicleSectionContentFourthStepDecorativeElements.types';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const AnimatedChronicleSectionContentFourthStepDecorativeElements: FC<
  IProps
> = ({ animationBounce, animationDuration, inView, isDesk }) => {
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: animationDuration,
    bounce: animationBounce,
  };

  const leftElementVariants: Variants = {
    hidden: {
      x: isDesk ? 200 : 0,
      y: isDesk ? 0 : 150,
      transition,
    },
    visible: {
      x: 0,
      y: 0,
      transition,
    },
  };

  const ukraineElementVariants: Variants = {
    hidden: {
      x: isDesk ? -200 : 0,
      y: isDesk ? 0 : 150,
      transition,
    },
    visible: {
      x: 0,
      y: 0,
      transition,
    },
  };

  const statisticsElementVariants: Variants = {
    hidden: {
      x: isDesk ? -200 : 0,
      y: isDesk ? 0 : -150,
      transition,
    },
    visible: {
      x: 0,
      y: 0,
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <PrimaryElement variants={leftElementVariants}>
        <Photo src={photo} alt='' />
        <TextWrap>
          <Text>Найбільша явка виборців за всю історію незалежної України</Text>
        </TextWrap>
      </PrimaryElement>
      <PrimaryElement variants={ukraineElementVariants}>
        <Ukraine src={ukraine} alt='' />
      </PrimaryElement>
      <Element variants={statisticsElementVariants}>
        <Statistics src={statistics} alt='' />
      </Element>
    </Container>
  );
};

export default AnimatedChronicleSectionContentFourthStepDecorativeElements;
