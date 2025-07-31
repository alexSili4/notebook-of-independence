import { FC } from 'react';
import DonationSectionPaymentDetails from '@MainPageComponents/DonationSectionPaymentDetails';
import {
  Container,
  Element,
} from './AnimatedDonationSectionPaymentDetails.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedDonationSectionPaymentDetails.types';

const AnimatedDonationSectionPaymentDetails: FC<IProps> = ({
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
      x: '52vw',
      transition,
    },
    visible: {
      y: 0,
      x: 0,
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <DonationSectionPaymentDetails />
      </Element>
    </Container>
  );
};

export default AnimatedDonationSectionPaymentDetails;
