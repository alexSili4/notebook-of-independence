import { FC } from 'react';
import NewHistorySectionImages from '@MainPageComponents/NewHistorySectionImages';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedNewHistorySectionImages.types';
import { Container, Element } from './AnimatedNewHistorySectionImages.styled';

const AnimatedNewHistorySectionImages: FC<IProps> = ({
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
    bounce: 0.4,
  };

  const elementVariants: Variants = {
    hidden: {
      y: '-32vh',
      transition,
    },
    visible: {
      y: 0,
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>
        <NewHistorySectionImages />
      </Element>
    </Container>
  );
};

export default AnimatedNewHistorySectionImages;
