import { FC } from 'react';
import {
  Container,
  PhotoBottomRight,
  PhotoBottomRightMarker,
} from './AboutSectionContentImgPhotoBottomRightBtn.styled';
import AboutSectionContentImagesBtn from '@MainPageComponents/AboutSectionContentImagesBtn';
import AboutSectionContentImagesMarker from '@MainPageComponents/AboutSectionContentImagesMarker';
import photoBottomRight from '@/images/about/photo-bottom-right.png';
import { IProps } from './AboutSectionContentImgPhotoBottomRightBtn.types';

const AboutSectionContentImgPhotoBottomRightBtn: FC<IProps> = ({
  isCurrentStep,
  onMouseEnter,
}) => {
  return (
    <Container>
      <AboutSectionContentImagesBtn onMouseEnter={onMouseEnter}>
        <PhotoBottomRight src={photoBottomRight} alt='' />
      </AboutSectionContentImagesBtn>
      <PhotoBottomRightMarker>
        <AboutSectionContentImagesMarker isCurrentStep={isCurrentStep} />
      </PhotoBottomRightMarker>
    </Container>
  );
};

export default AboutSectionContentImgPhotoBottomRightBtn;
