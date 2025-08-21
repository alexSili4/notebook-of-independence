import { FC } from 'react';
import {
  TextWrap,
  Text,
  Title,
  Container,
  Element,
} from './AnimatedChronicleSectionContentPreviewText.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedChronicleSectionContentPreviewText.types';

const AnimatedChronicleSectionContentPreviewText: FC<IProps> = ({
  inView,
  animationDuration,
  animationBounce,
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

  const titlePartVariants: Variants = {
    hidden: {
      y: '-40%',
      transition,
    },
    visible: {
      y: 0,
      transition,
    },
  };

  const textPartVariants: Variants = {
    hidden: {
      y: '40%',
      transition,
    },
    visible: {
      y: 0,
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <TextWrap>
        <Element variants={titlePartVariants}>
          <Title>Хроніка свободи</Title>
        </Element>
        <Element variants={textPartVariants}>
          <Text>
            Незалежність не була випадковістю. Вона народжувалась з десятиліть
            боротьби та сміливих рішень.
          </Text>
        </Element>
      </TextWrap>
    </Container>
  );
};

export default AnimatedChronicleSectionContentPreviewText;
