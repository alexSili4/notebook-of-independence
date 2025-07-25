import { FC } from 'react';
import photo from '@/images/chronicle/fourthStep/photo.png';
import statistics from '@/images/chronicle/fourthStep/statistics.png';
import ukraine from '@/images/chronicle/fourthStep/ukraine.png';
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
> = ({ animationBounce, animationDuration, inView }) => {
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
      x: 200,
      transition,
    },
    visible: {
      x: 0,
      transition,
    },
  };

  const rightElementVariants: Variants = {
    hidden: {
      x: -200,
      transition,
    },
    visible: {
      x: 0,
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
      <Element variants={rightElementVariants}>
        <Statistics src={statistics} alt='' />
        <Ukraine src={ukraine} alt='' />
      </Element>
    </Container>
  );
};

export default AnimatedChronicleSectionContentFourthStepDecorativeElements;
