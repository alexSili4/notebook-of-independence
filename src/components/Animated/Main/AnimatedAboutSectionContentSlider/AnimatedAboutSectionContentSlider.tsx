import { FC } from 'react';
import { Container, Element } from './AnimatedAboutSectionContentSlider.styled';
import AboutSectionContentSlider from '@MainPageComponents/AboutSectionContentSlider';
import { IProps } from './AnimatedAboutSectionContentSlider.types';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const AnimatedAboutSectionContentSlider: FC<IProps> = ({
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
      opacity: 0,
      transition,
    },
    visible: {
      opacity: 1,
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>
        <AboutSectionContentSlider animationDuration={1} />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentSlider;
