import { FC } from 'react';
import BuyNotebookSection from '@MainPageComponents/BuyNotebookSection';
import { Container, Element } from './AnimatedBuyNotebookSection.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedBuyNotebookSection.types';

const AnimatedBuyNotebookSection: FC<IProps> = ({
  animationDuration,
  animationBounce,
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
    bounce: animationBounce,
  };

  const elementVariants: Variants = {
    hidden: {
      x: '100%',
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
        <BuyNotebookSection />
      </Element>
    </Container>
  );
};

export default AnimatedBuyNotebookSection;
