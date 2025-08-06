import { FC } from 'react';
import NewHistorySectionText from '@MainPageComponents/NewHistorySectionText';
import { Container, Element } from './AnimatedNewHistorySectionText.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedNewHistorySectionText.types';

const AnimatedNewHistorySectionText: FC<IProps> = ({
  inView,
  animationDuration,
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
      y: isDesk ? '-100vh' : '-17.5vh',
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
        <NewHistorySectionText />
      </Element>
    </Container>
  );
};

export default AnimatedNewHistorySectionText;
