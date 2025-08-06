import { FC } from 'react';
import NewHistorySection from '@MainPageComponents/NewHistorySection';
import { Container, Element } from './AnimatedNewHistorySection.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedNewHistorySection.types';

const AnimatedNewHistorySection: FC<IProps> = ({
  animationDuration,
  sectionInView,
  notebookInView,
  isDesk,
}) => {
  const animate: VariantLabels = sectionInView ? 'visible' : 'hidden';

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
      y: '100lvh',
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
        <NewHistorySection
          isDesk={isDesk}
          animationDuration={animationDuration}
          notebookInView={notebookInView}
        />
      </Element>
    </Container>
  );
};

export default AnimatedNewHistorySection;
