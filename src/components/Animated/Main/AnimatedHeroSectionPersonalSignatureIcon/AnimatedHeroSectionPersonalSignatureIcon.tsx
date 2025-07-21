import { FC } from 'react';
import {
  Container,
  PersonalSignatureIcon,
  Element,
} from './AnimatedHeroSectionPersonalSignatureIcon.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedHeroSectionPersonalSignatureIcon.types';

const AnimatedHeroSectionPersonalSignatureIcon: FC<IProps> = ({
  inView,
  animationDuration,
  animationDelay,
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

  const elementVariants: Variants = {
    hidden: {
      width: 0,
      transition,
    },
    visible: {
      width: '100%',
      transition: {
        ...transition,
        delay: animationDelay,
      },
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <PersonalSignatureIcon />
      </Element>
    </Container>
  );
};

export default AnimatedHeroSectionPersonalSignatureIcon;
