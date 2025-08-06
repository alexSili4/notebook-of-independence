import { FC } from 'react';
import photo from '@/images/chronicle/secondStep/photo.png';
import pageLight from '@/images/chronicle/secondStep/page-light.png';
import pageDark from '@/images/chronicle/secondStep/page-dark.png';
import {
  Photo,
  PageDark,
  PageLight,
  Text,
  TextWrap,
  Container,
  Element,
  PrimaryElement,
} from './AnimatedChronicleSectionContentSecondStepDecorativeElements.styled';
import { IProps } from './AnimatedChronicleSectionContentSecondStepDecorativeElements.types';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const ChronicleSectionContentSecondStepDecorativeElements: FC<IProps> = ({
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
      x: isDesk ? 200 : 145,
      transition,
    },
    visible: {
      x: 0,
      transition,
    },
  };

  const rightElementVariants: Variants = {
    hidden: {
      x: isDesk ? -200 : -145,
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
          <Text>
            Текст документа свідомо скоротили до мінімального обсягу, щоб
            уникнути довгих дискусій. Надії мільйонів помістилися на одному
            листочку...
          </Text>
        </TextWrap>
      </PrimaryElement>
      <Element variants={rightElementVariants}>
        <PageLight src={pageLight} alt='' />
      </Element>
      <PrimaryElement variants={rightElementVariants}>
        <PageDark src={pageDark} alt='' />
      </PrimaryElement>
    </Container>
  );
};

export default ChronicleSectionContentSecondStepDecorativeElements;
