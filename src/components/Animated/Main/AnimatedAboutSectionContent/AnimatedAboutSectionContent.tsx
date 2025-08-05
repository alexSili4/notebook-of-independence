import { FC } from 'react';
import AboutSectionContent from '@MainPageComponents/AboutSectionContent';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedAboutSectionContent.types';
import { Container, Element } from './AnimatedAboutSectionContent.styled';
import { useIsDesk } from '@/hooks';

const AnimatedAboutSectionContent: FC<IProps> = ({
  animationDuration,
  inView,
  videoInView,
}) => {
  const isDesk = useIsDesk();
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: isDesk ? animationDuration : 2.5,
    bounce: isDesk ? 0.2 : 0.4,
  };

  const elementVariants: Variants = {
    hidden: {
      x: isDesk ? '100%' : 0,
      y: isDesk ? 0 : '100%',
      transition,
    },
    visible: {
      x: 0,
      y: 0,
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
