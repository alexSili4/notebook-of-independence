import { FC } from 'react';
import NewHistorySectionNotebook from '@MainPageComponents/NewHistorySectionNotebook';
import { Container, Element } from './AnimatedNewHistorySectionNotebook.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedNewHistorySectionNotebook.types';

const AnimatedNewHistorySectionNotebook: FC<IProps> = ({
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
    bounce: 0.4,
  };

  const elementVariants: Variants = {
    hidden: {
      y: '56.9vh',
      transition,
    },
    visible: {
      y: 0,
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <NewHistorySectionNotebook />
      </Element>
    </Container>
  );
};

export default AnimatedNewHistorySectionNotebook;
