import { FC } from 'react';
import DonationSection from '@MainPageComponents/DonationSection';
import { IProps } from './AnimatedDonationSection.types';
import { Element, Container } from './AnimatedDonationSection.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';

const AnimatedDonationSection: FC<IProps> = ({
  animationDuration,
  inView,
  onGoBackBtnClick,
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
      y: '100%',
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
        <DonationSection
          animationDuration={animationDuration}
          inView={inView}
          onGoBackBtnClick={onGoBackBtnClick}
        />
      </Element>
    </Container>
  );
};

export default AnimatedDonationSection;
