import { FC } from 'react';
import photoBottomLeft from '@/images/about/photo-bottom-left.png';
import {
  Container,
  PhotoBottomLeft,
  PhotoBottomLeftMarker,
} from './AboutSectionContentImgPhotoBottomLeftBtn.styled';
import AboutSectionContentImagesMarker from '@MainPageComponents/AboutSectionContentImagesMarker';
import AboutSectionContentImagesBtn from '@MainPageComponents/AboutSectionContentImagesBtn';
import { IProps } from './AboutSectionContentImgPhotoBottomLeftBtn.types';

const AboutSectionContentImgPhotoBottomLeftBtn: FC<IProps> = ({
  isCurrentStep,
  onClick,
  inFocus,
  onMouseEnter,
}) => {
  return (
    <Container>
      <AboutSectionContentImagesBtn
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      >
        <PhotoBottomLeft src={photoBottomLeft} alt='' inFocus={inFocus} />
      </AboutSectionContentImagesBtn>
      <PhotoBottomLeftMarker>
        <AboutSectionContentImagesMarker isCurrentStep={isCurrentStep} />
      </PhotoBottomLeftMarker>
    </Container>
  );
};

export default AboutSectionContentImgPhotoBottomLeftBtn;
