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
  isDesk,
}) => {
  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: isDesk ? animationDuration : 2.5,
    bounce: isDesk ? animationBounce : 0.4,
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
          isDesk={isDesk}
        />
      </Element>
    </Container>
  );
};

export default AnimatedChronicleSection;
