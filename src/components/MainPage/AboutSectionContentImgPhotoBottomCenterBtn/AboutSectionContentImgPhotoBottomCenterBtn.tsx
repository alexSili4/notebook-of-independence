import { FC } from 'react';
import {
  Container,
  PhotoBottomCenter,
  PhotoBottomCenterMarker,
} from './AboutSectionContentImgPhotoBottomCenterBtn.styled';
import AboutSectionContentImagesBtn from '@MainPageComponents/AboutSectionContentImagesBtn';
import AboutSectionContentImagesMarker from '@MainPageComponents/AboutSectionContentImagesMarker';
import photoBottomCenter from '@/images/about/photo-bottom-center.png';
import { IProps } from './AboutSectionContentImgPhotoBottomCenterBtn.types';

const AboutSectionContentImgPhotoBottomCenterBtn: FC<IProps> = ({
  onClick,
  isCurrentStep,
  onMouseEnter,
}) => {
  return (
    <Container>
      <AboutSectionContentImagesBtn
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      >
        <PhotoBottomCenter src={photoBottomCenter} alt='' />
      </AboutSectionContentImagesBtn>
      <PhotoBottomCenterMarker>
        <AboutSectionContentImagesMarker isCurrentStep={isCurrentStep} />
      </PhotoBottomCenterMarker>
    </Container>
  );
};

export default AboutSectionContentImgPhotoBottomCenterBtn;
