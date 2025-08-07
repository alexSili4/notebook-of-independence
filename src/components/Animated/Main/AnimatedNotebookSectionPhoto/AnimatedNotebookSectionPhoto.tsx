import { FC } from 'react';
import photoDesk from '@/images/notebook/photo-desk.png';
import photoMob from '@/images/notebook/photo-mob.png';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import {
  Container,
  Element,
  Photo,
} from './AnimatedNotebookSectionPhoto.styled';
import { IProps } from './AnimatedNotebookSectionPhoto.types';
import { theme } from '@/constants';

const AnimatedNotebookSectionPhoto: FC<IProps> = ({
  inView,
  animationDuration,
  animationBounce,
}) => {
  const animate: VariantLabels = inView ? 'visible' : 'hidden';
  const deskMedia = `(min-width: ${theme.breakpoints.desk}px)`;

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
        <Photo>
          <source srcSet={photoDesk} media={deskMedia} />
          <img src={photoMob} alt='' />
        </Photo>
      </Element>
    </Container>
  );
};

export default AnimatedNotebookSectionPhoto;
