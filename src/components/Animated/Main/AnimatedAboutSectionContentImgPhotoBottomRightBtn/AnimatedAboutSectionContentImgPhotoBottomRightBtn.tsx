import { FC } from 'react';
import { IProps } from './AnimatedAboutSectionContentImgPhotoBottomRightBtn.types';
import AboutSectionContentImgPhotoBottomRightBtn from '@MainPageComponents/AboutSectionContentImgPhotoBottomRightBtn';
import {
  Container,
  Element,
} from './AnimatedAboutSectionContentImgPhotoBottomRightBtn.styled';

const AnimatedAboutSectionContentImgPhotoBottomRightBtn: FC<IProps> = ({
  animate,
  containerVariants,
  elementVariants,
  isCurrentStep,
  onClick,
  onMouseEnter,
}) => {
  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>
        <AboutSectionContentImgPhotoBottomRightBtn
          isCurrentStep={isCurrentStep}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
        />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentImgPhotoBottomRightBtn;
