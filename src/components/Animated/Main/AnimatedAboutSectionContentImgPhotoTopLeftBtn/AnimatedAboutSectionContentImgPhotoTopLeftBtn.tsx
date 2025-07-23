import { FC } from 'react';
import AboutSectionContentImgPhotoTopLeftBtn from '@MainPageComponents/AboutSectionContentImgPhotoTopLeftBtn';
import { IProps } from './AnimatedAboutSectionContentImgPhotoTopLeftBtn.types';
import {
  Container,
  Element,
} from './AnimatedAboutSectionContentImgPhotoTopLeftBtn.styled';

const AnimatedAboutSectionContentImgPhotoTopLeftBtn: FC<IProps> = ({
  isCurrentStep,
  onMouseEnter,
  animate,
  containerVariants,
  elementVariants,
}) => {
  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>
        <AboutSectionContentImgPhotoTopLeftBtn
          isCurrentStep={isCurrentStep}
          onMouseEnter={onMouseEnter}
        />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentImgPhotoTopLeftBtn;
