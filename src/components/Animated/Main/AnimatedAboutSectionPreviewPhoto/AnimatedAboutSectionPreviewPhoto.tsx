import { FC } from 'react';
import photoLeft from '@/images/about/photo-left-min.png';
import photoRight from '@/images/about/photo-right-min.png';
import {
  PhotoRightWrap,
  PhotoLeft,
  PhotoLeftWrap,
  PhotoRight,
  Element,
} from './AnimatedAboutSectionPreviewPhoto.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedAboutSectionPreviewPhoto.types';

const AnimatedAboutSectionPreviewPhoto: FC<IProps> = ({
  inView,
  animationDuration,
}) => {
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: animationDuration,
    bounce: 0.2,
  };

  const photoLeftVariants: Variants = {
    hidden: {
      x: '-20%',
      y: '20%',
      transition,
    },
    visible: {
      x: 0,
      y: 0,
      transition,
    },
  };

  const photoRightVariants: Variants = {
    hidden: {
      x: '20%',
      y: '20%',
      transition,
    },
    visible: {
      x: 0,
      y: 0,
      transition,
    },
  };

  return (
    <>
      <PhotoRightWrap
        animate={animate}
        variants={containerVariants}
        initial='hidden'
      >
        <Element variants={photoRightVariants}>
          <PhotoRight
            src={photoRight}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 30'
          />
        </Element>
      </PhotoRightWrap>
      <PhotoLeftWrap>
        <Element variants={photoLeftVariants}>
          <PhotoLeft
            src={photoLeft}
            alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 31'
          />
        </Element>
      </PhotoLeftWrap>
    </>
  );
};

export default AnimatedAboutSectionPreviewPhoto;
