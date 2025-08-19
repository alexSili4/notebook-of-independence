import { FC, useRef } from 'react';
import Header from '@GeneralComponents/Header';
import { Container, Element } from './AnimatedHeader.styled';
import { IProps } from './AnimatedHeader.types';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import { useIsFirsRender } from '@/hooks';

const AnimatedHeader: FC<IProps> = ({
  animationDelay,
  animationDuration,
  showFullScreenHeroVideo,
  isDesk,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef);
  const { isFirstRender, updateIsFirsRender } = useIsFirsRender();
  const animate: VariantLabels =
    inView && !showFullScreenHeroVideo ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    type: 'spring',
    duration: animationDuration,
    bounce: 0.6,
  };

  const elementVariants: Variants = {
    hidden: {
      y: '-100%',
      opacity: isDesk ? 1 : 0,
      transition: {
        y: transition,
        opacity: { ...transition, delay: animationDuration },
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ...transition,
        delay: isFirstRender ? animationDelay : 0,
      },
    },
  };

  return (
    <Container
      ref={containerRef}
      animate={animate}
      variants={containerVariants}
      initial='hidden'
      onAnimationComplete={updateIsFirsRender}
    >
      <Element variants={elementVariants}>
        <Header />
      </Element>
    </Container>
  );
};

export default AnimatedHeader;
