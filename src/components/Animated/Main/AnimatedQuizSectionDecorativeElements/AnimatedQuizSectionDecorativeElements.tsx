import { FC } from 'react';
import {
  Info,
  InfoWrap,
  Light,
  LightWrap,
  InfoElement,
  LightElement,
} from './AnimatedQuizSectionDecorativeElements.styled';
import info from '@/images/quiz/info-min.png';
import light from '@/images/quiz/light-min.png';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedQuizSectionDecorativeElements.types';

const AnimatedQuizSectionDecorativeElements: FC<IProps> = ({
  animationDuration,
  inView,
}) => {
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: animationDuration,
    bounce: 0,
  };

  const infoVariants: Variants = {
    hidden: {
      width: 0,
      transition,
    },
    visible: {
      width: '100%',
      transition,
    },
  };

  const lightVariants: Variants = {
    hidden: {
      height: 0,
      transition,
    },
    visible: {
      height: '100%',
      transition,
    },
  };

  return (
    <>
      <LightWrap
        animate={animate}
        variants={containerVariants}
        initial='hidden'
      >
        <LightElement variants={lightVariants}>
          <Light
            src={light}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 62'
          />
        </LightElement>
      </LightWrap>
      <InfoWrap animate={animate} variants={containerVariants} initial='hidden'>
        <InfoElement variants={infoVariants}>
          <Info
            src={info}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 63'
          />
        </InfoElement>
      </InfoWrap>
    </>
  );
};

export default AnimatedQuizSectionDecorativeElements;
