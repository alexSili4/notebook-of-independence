import { FC } from 'react';
import ChronicleSection from '@MainPageComponents/ChronicleSection';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { Container, Element } from './AnimatedChronicleSection.styled';
import { IProps } from './AnimatedChronicleSection.types';

const AnimatedChronicleSection: FC<IProps> = ({
  contentInView,
  fifthStepInView,
  firstStepInView,
  fourthStepInView,
  secondStepInView,
  thirdStepInView,
  inView,
  animationDuration,
  animationBounce,
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
        <ChronicleSection
          contentInView={contentInView}
          fifthStepInView={fifthStepInView}
          firstStepInView={firstStepInView}
          fourthStepInView={fourthStepInView}
          secondStepInView={secondStepInView}
          thirdStepInView={thirdStepInView}
          animationDuration={animationDuration}
          sectionInView={inView}
          animationBounce={animationBounce}
        />
      </Element>
    </Container>
  );
};

export default AnimatedChronicleSection;
