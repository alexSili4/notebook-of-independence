import { FC } from 'react';
import {
  Container,
  PhotoTopRight,
  PhotoTopRightMarker,
} from './AboutSectionContentImgPhotoTopRightBtn.styled';
import AboutSectionContentImagesBtn from '@MainPageComponents/AboutSectionContentImagesBtn';
import AboutSectionContentImagesMarker from '@MainPageComponents/AboutSectionContentImagesMarker';
import photoTopRight from '@/images/about/photo-top-right-min.png';
import { IProps } from './AboutSectionContentImgPhotoTopRightBtn.types';

const AboutSectionContentImgPhotoTopRightBtn: FC<IProps> = ({
  isCurrentStep,
  onClick,
  onMouseEnter,
}) => {
  return (
    <Container>
      <AboutSectionContentImagesBtn
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      >
        <PhotoTopRight src={photoTopRight} alt='38' />
      </AboutSectionContentImagesBtn>
      <PhotoTopRightMarker>
        <AboutSectionContentImagesMarker isCurrentStep={isCurrentStep} />
      </PhotoTopRightMarker>
    </Container>
  );
};

export default AboutSectionContentImgPhotoTopRightBtn;
