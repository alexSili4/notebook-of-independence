import { FC } from 'react';
import leftLineDesk from '@/images/chronicle/left-line-desk.png';
import leftLineMob from '@/images/chronicle/left-line-mob.png';
import rightLineDesk from '@/images/chronicle/right-line-desk.png';
import rightLineMob from '@/images/chronicle/right-line-mob.png';
import {
  LeftLineContainer,
  LeftLinePicture,
  LeftLineImgWrap,
  RightLineImgWrap,
  RightLinePicture,
  RightLineContainer,
} from './AnimatedChronicleSectionContentPreviewLines.styled';
import { Transition, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedChronicleSectionContentPreviewLines.types';
import { theme } from '@/constants';

const AnimatedChronicleSectionContentPreviewLines: FC<IProps> = ({
  inView,
  animationDuration,
}) => {
  const deskMedia = `(min-width: ${theme.breakpoints.desk}px)`;
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
          <LeftLinePicture>
            <source srcSet={leftLineDesk} media={deskMedia} />
            <img src={leftLineMob} alt='' />
          </LeftLinePicture>
        </LeftLineImgWrap>
      </LeftLineContainer>
      <RightLineContainer
        animate={animate}
        variants={containerVariants}
        initial='hidden'
      >
        <RightLineImgWrap variants={rightLineVariants}>
          <RightLinePicture>
            <source srcSet={rightLineDesk} media={deskMedia} />
            <img src={rightLineMob} alt='' />
          </RightLinePicture>
        </RightLineImgWrap>
      </RightLineContainer>
    </>
  );
};

export default AnimatedChronicleSectionContentPreviewLines;
