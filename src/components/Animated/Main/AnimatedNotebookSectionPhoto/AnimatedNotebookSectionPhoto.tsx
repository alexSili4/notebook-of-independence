import { FC } from 'react';
import photo from '@/images/notebook/photo.png';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import {
  Container,
  Element,
  Photo,
} from './AnimatedNotebookSectionPhoto.styled';
import { IProps } from './AnimatedNotebookSectionPhoto.types';

const AnimatedNotebookSectionPhoto: FC<IProps> = ({
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

  const elementVariants: Variants = {
    hidden: {
      x: 200,
      transition,
    },
    visible: {
      x: 0,
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <Photo src={photo} alt='' />
      </Element>
    </Container>
  );
};

export default AnimatedNotebookSectionPhoto;
