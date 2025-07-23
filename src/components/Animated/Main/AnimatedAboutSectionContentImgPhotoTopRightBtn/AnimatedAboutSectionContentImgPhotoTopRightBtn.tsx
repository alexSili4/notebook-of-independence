import { FC } from 'react';
import { IProps } from './AnimatedAboutSectionContentImgPhotoTopRightBtn.types';
import AboutSectionContentImgPhotoTopRightBtn from '@MainPageComponents/AboutSectionContentImgPhotoTopRightBtn';
import {
  Container,
  Element,
} from './AnimatedAboutSectionContentImgPhotoTopRightBtn.styled';

const AnimatedAboutSectionContentImgPhotoTopRightBtn: FC<IProps> = ({
  animate,
  containerVariants,
  elementVariants,
  isCurrentStep,
  onMouseEnter,
}) => {
  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>
        <AboutSectionContentImgPhotoTopRightBtn
          isCurrentStep={isCurrentStep}
          onMouseEnter={onMouseEnter}
        />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentImgPhotoTopRightBtn;
