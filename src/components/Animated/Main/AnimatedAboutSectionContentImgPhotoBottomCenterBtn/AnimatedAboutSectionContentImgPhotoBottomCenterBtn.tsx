import { FC } from 'react';
import AboutSectionContentImgPhotoBottomCenterBtn from '@MainPageComponents/AboutSectionContentImgPhotoBottomCenterBtn';
import {
  Container,
  Element,
} from './AnimatedAboutSectionContentImgPhotoBottomCenterBtn.styled';
import { IProps } from './AnimatedAboutSectionContentImgPhotoBottomCenterBtn.types';

const AnimatedAboutSectionContentImgPhotoBottomCenterBtn: FC<IProps> = ({
  animate,
  containerVariants,
  elementVariants,
  isCurrentStep,
  onMouseEnter,
}) => {
  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>
        <AboutSectionContentImgPhotoBottomCenterBtn
          isCurrentStep={isCurrentStep}
          onMouseEnter={onMouseEnter}
        />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentImgPhotoBottomCenterBtn;
