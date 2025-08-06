import { FC } from 'react';
import { Container, Title, Element } from './AnimatedHeroSectionTitle.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedHeroSectionTitle.types';

const AnimatedHeroSectionTitle: FC<IProps> = ({
  animationDelay,
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
    bounce: 0.6,
  };

  const elementVariants: Variants = {
    hidden: {
      y: '25lvh',
      transition,
    },
    visible: {
      y: 0,
      transition: {
        ...transition,
        delay: animationDelay,
      },
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <Title>Незалежність</Title>
      </Element>
    </Container>
  );
};

export default AnimatedHeroSectionTitle;
