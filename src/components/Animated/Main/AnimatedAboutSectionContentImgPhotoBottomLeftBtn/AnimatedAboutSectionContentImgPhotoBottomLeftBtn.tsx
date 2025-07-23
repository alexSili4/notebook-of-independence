import { FC } from 'react';
import AboutSectionContentImgPhotoBottomLeftBtn from '@MainPageComponents/AboutSectionContentImgPhotoBottomLeftBtn';
import { IProps } from './AnimatedAboutSectionContentImgPhotoBottomLeftBtn.types';
import {
  Container,
  Element,
} from './AnimatedAboutSectionContentImgPhotoBottomLeftBtn.styled';

const AnimatedAboutSectionContentImgPhotoBottomLeftBtn: FC<IProps> = ({
  animate,
  containerVariants,
  elementVariants,
  isCurrentStep,
  onMouseEnter,
}) => {
  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>
        <AboutSectionContentImgPhotoBottomLeftBtn
          isCurrentStep={isCurrentStep}
          onMouseEnter={onMouseEnter}
        />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentImgPhotoBottomLeftBtn;
