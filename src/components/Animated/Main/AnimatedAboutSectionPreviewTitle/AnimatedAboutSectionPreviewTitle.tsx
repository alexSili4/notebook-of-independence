import { FC } from 'react';
import {
  Container,
  Element,
  Title,
  TitlePart,
} from './AnimatedAboutSectionPreviewTitle.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedAboutSectionPreviewTitle.types';

const AnimatedAboutSectionPreviewTitle: FC<IProps> = ({
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
    bounce: 0.2,
  };

  const topTitlePartVariants: Variants = {
    hidden: {
      y: '-40%',
      transition,
    },
    visible: {
      y: 0,
      transition,
    },
  };

  const bottomTitlePartVariants: Variants = {
    hidden: {
      y: '40%',
      transition,
    },
    visible: {
      y: 0,
      transition,
    },
  };

  return (
    <Container animate={animate} variants={containerVariants} initial='hidden'>
      <Title>
        <Element variants={topTitlePartVariants}>
          <TitlePart>Хто такий</TitlePart>
        </Element>
        <Element variants={bottomTitlePartVariants}>
          <TitlePart>Левко Лукʼяненко?</TitlePart>
        </Element>
      </Title>
    </Container>
  );
};

export default AnimatedAboutSectionPreviewTitle;
