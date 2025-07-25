import { FC } from 'react';
import yellowColor from '@/images/chronicle/fifthStep/yellow-color.png';
import photoLeft from '@/images/chronicle/fifthStep/photo-left.png';
import photoRight from '@/images/chronicle/fifthStep/photo-right.png';
import blueColor from '@/images/chronicle/fifthStep/blue-color.png';
import {
  PhotoLeft,
  BlueColor,
  PhotoRight,
  Text,
  TextWrap,
  YellowColor,
  Container,
  Element,
} from './AnimatedChronicleSectionContentFifthStepDecorativeElements.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedChronicleSectionContentFifthStepDecorativeElements.types';

const AnimatedChronicleSectionContentFifthStepDecorativeElements: FC<
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
      <Element variants={leftElementVariants}>
        <PhotoLeft src={photoLeft} alt='' />
      </Element>
      <Element variants={rightElementVariants}>
        <PhotoRight src={photoRight} alt='' />
        <BlueColor src={blueColor} alt='' />
        <YellowColor src={yellowColor} alt='' />
        <TextWrap>
          <Text>
            Тисячі українців з вигуками "Ганьба!" прорвали кордон міліції і
            змусили зняти прапор УРСР
          </Text>
        </TextWrap>
      </Element>
    </Container>
  );
};

export default AnimatedChronicleSectionContentFifthStepDecorativeElements;
