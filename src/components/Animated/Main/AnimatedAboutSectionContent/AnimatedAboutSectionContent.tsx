import { FC } from 'react';
import AboutSectionContent from '@MainPageComponents/AboutSectionContent';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedAboutSectionContent.types';
import { Container, Element } from './AnimatedAboutSectionContent.styled';

const AnimatedAboutSectionContent: FC<IProps> = ({
  animationDuration,
  inView,
  videoInView,
}) => {
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: animationDuration,
    bounce: 0.2,
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
        <AboutSectionContent
          animationDuration={animationDuration}
          decorativeShapeInView={inView}
          videoInView={videoInView}
        />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContent;
