import { FC } from 'react';
import {
  Container,
  Element,
  Quote,
} from './AnimatedAzovSectionTextQuote.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import quote from '@/images/azov/quote-min.png';
import { IProps } from './AnimatedAzovSectionTextQuote.types';

const AnimatedAzovSectionTextQuote: FC<IProps> = ({
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
    bounce: 0,
  };

  const elementVariants: Variants = {
    hidden: {
      width: 0,
      transition,
    },
    visible: {
      width: '100%',
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Element variants={elementVariants}>
        <Quote src={quote} alt='' />
      </Element>
    </Container>
  );
};

export default AnimatedAzovSectionTextQuote;
