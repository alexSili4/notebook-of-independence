import { FC } from 'react';
import decorativeImg from '@/images/chronicle/firstStep/decorative-img.png';
import photo from '@/images/chronicle/firstStep/photo.png';
import {
  Image,
  Text,
  TextWrap,
  Photo,
  PhotoDesc,
  PhotoDescWrap,
  PhotoWrap,
} from './AnimatedChronicleSectionContentFirstStepDecorativeElements.styled';
import {
  Container,
  Element,
} from './AnimatedChronicleSectionContentFirstStepDecorativeElements.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedChronicleSectionContentFirstStepDecorativeElements.types';

const AnimatedChronicleSectionContentFirstStepDecorativeElements: FC<
  IProps
> = ({ inView, animationDuration, animationBounce }) => {
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
        <TextWrap>
          <Text>
            Частина депутатів навіть не вірила, що це матиме юридичну силу.
          </Text>
        </TextWrap>
        <Image src={decorativeImg} alt='' />
      </Element>
      <Element variants={rightElementVariants}>
        <PhotoWrap>
          <Photo src={photo} alt='' />
          <PhotoDescWrap>
            <PhotoDesc>
              Біля стін Верховної Ради проходили мітинги в підтримку ухвалення
              Декларації
            </PhotoDesc>
          </PhotoDescWrap>
        </PhotoWrap>
      </Element>
    </Container>
  );
};

export default AnimatedChronicleSectionContentFirstStepDecorativeElements;
