import { FC } from 'react';
import NewHistorySectionNotebook from '@MainPageComponents/NewHistorySectionNotebook';
import { Container, Element } from './AnimatedNewHistorySectionNotebook.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedNewHistorySectionNotebook.types';

const AnimatedNewHistorySectionNotebook: FC<IProps> = ({
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
    bounce: 0.4,
  };

  const elementVariants: Variants = {
    hidden: {
      y: isDesk ? '56.9lvh' : '21.6lvh',
      transition,
    },
    visible: {
      y: isDesk ? 0 : '-20lvh',
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <NewHistorySectionNotebook isDesk={isDesk} />
      </Element>
    </Container>
  );
};

export default AnimatedNewHistorySectionNotebook;
