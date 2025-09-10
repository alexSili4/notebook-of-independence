import { FC } from 'react';
import yellowColor from '@/images/chronicle/fifthStep/yellow-color-min.png';
import photoLeft from '@/images/chronicle/fifthStep/photo-left-min.png';
import photoRight from '@/images/chronicle/fifthStep/photo-right-min.png';
import blueColor from '@/images/chronicle/fifthStep/blue-color-min.png';
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
      x: isDesk ? -200 : '-28%',
      transition,
    },
    visible: {
      x: 0,
      transition,
    },
  };

  const colorsElementVariants: Variants = {
    hidden: {
      x: isDesk ? -200 : '50%',
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
        <PhotoLeft
          src={photoLeft}
          alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 42'
        />
      </Element>
      <Element variants={rightElementVariants}>
        <PhotoRight
          src={photoRight}
          alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 43'
        />
        <TextWrap>
          <Text>
            Тисячі українців з вигуками "Ганьба!" прорвали кордон міліції і
            змусили зняти прапор УРСР
          </Text>
        </TextWrap>
      </Element>
      <Element variants={colorsElementVariants}>
        <BlueColor
          src={blueColor}
          alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 44'
        />
        <YellowColor
          src={yellowColor}
          alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 45'
        />
      </Element>
    </Container>
  );
};

export default AnimatedChronicleSectionContentFifthStepDecorativeElements;
