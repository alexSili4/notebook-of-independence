import { FC } from 'react';
import leftLine from '@/images/chronicle/left-line.png';
import rightLine from '@/images/chronicle/right-line.png';
import {
  LeftLineContainer,
  LeftLine,
  LeftLineImgWrap,
  RightLineImgWrap,
  RightLine,
  RightLineContainer,
} from './AnimatedChronicleSectionContentPreviewLines.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedChronicleSectionContentPreviewLines.types';

const AnimatedChronicleSectionContentPreviewLines: FC<IProps> = ({
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

  const leftLineVariants: Variants = {
    hidden: {
      width: 0,
      transition,
    },
    visible: {
      width: '100%',
      transition,
    },
  };

  const rightLineVariants: Variants = {
    hidden: {
      width: 0,
      transition,
    },
    visible: {
      width: '100%',
      transition: {
        ...transition,
        delay: animationDuration,
      },
    },
  };

  return (
    <>
      <LeftLineContainer
        animate={animate}
        variants={containerVariants}
        initial='hidden'
      >
        <LeftLineImgWrap variants={leftLineVariants}>
          <LeftLine src={leftLine} alt='' />
        </LeftLineImgWrap>
      </LeftLineContainer>
      <RightLineContainer
        animate={animate}
        variants={containerVariants}
        initial='hidden'
      >
        <RightLineImgWrap variants={rightLineVariants}>
          <RightLine src={rightLine} alt='' />
        </RightLineImgWrap>
      </RightLineContainer>
    </>
  );
};

export default AnimatedChronicleSectionContentPreviewLines;
