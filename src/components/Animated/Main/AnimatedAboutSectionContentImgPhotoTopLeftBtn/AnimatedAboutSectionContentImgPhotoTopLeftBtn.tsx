import { FC } from 'react';
import AboutSectionContentImgPhotoTopLeftBtn from '@MainPageComponents/AboutSectionContentImgPhotoTopLeftBtn';
import { IProps } from './AnimatedAboutSectionContentImgPhotoTopLeftBtn.types';
import {
  Container,
  Element,
} from './AnimatedAboutSectionContentImgPhotoTopLeftBtn.styled';

const AnimatedAboutSectionContentImgPhotoTopLeftBtn: FC<IProps> = ({
  isCurrentStep,
  onClick,
  animate,
  containerVariants,
  elementVariants,
  onMouseEnter,
}) => {
  return (
    <Container animate={animate} variants={containerVariants} initial='visible'>
      <Element variants={elementVariants}>
        <AboutSectionContentImgPhotoTopLeftBtn
          isCurrentStep={isCurrentStep}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
        />
      </Element>
    </Container>
  );
};

export default AnimatedAboutSectionContentImgPhotoTopLeftBtn;
