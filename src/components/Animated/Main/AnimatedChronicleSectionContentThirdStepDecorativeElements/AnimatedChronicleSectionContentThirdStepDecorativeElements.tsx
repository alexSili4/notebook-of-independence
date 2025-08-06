import { FC } from 'react';
import photoLeft from '@/images/chronicle/thirdStep/photo-left.png';
import photoRight from '@/images/chronicle/thirdStep/photo-right.png';
import {
  PhotoLeft,
  PhotoRight,
  Text,
  TextWrap,
  Container,
  Element,
} from './AnimatedChronicleSectionContentThirdStepDecorativeElements.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedChronicleSectionContentThirdStepDecorativeElements.types';

const ChronicleSectionContentThirdStepDecorativeElements: FC<IProps> = ({
  animationBounce,
  animationDuration,
  inView,
  isDesk,
}) => {
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
      y: isDesk ? 0 : -150,
      transition,
    },
    visible: {
      x: 0,
      y: 0,
      transition,
    },
  };

  const rightElementVariants: Variants = {
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

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={leftElementVariants}>
        <PhotoLeft src={photoLeft} alt='' />
      </Element>
      <Element variants={rightElementVariants}>
        <PhotoRight src={photoRight} alt='' />
        <TextWrap>
          <Text>
            Частина депутатів навіть не вірила, що це матиме юридичну силу.
          </Text>
        </TextWrap>
      </Element>
    </Container>
  );
};

export default ChronicleSectionContentThirdStepDecorativeElements;
