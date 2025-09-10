import { FC } from 'react';
import {
  Container,
  PhotoBottomRight,
  PhotoBottomRightMarker,
} from './AboutSectionContentImgPhotoBottomRightBtn.styled';
import AboutSectionContentImagesBtn from '@MainPageComponents/AboutSectionContentImagesBtn';
import AboutSectionContentImagesMarker from '@MainPageComponents/AboutSectionContentImagesMarker';
import photoBottomRight from '@/images/about/photo-bottom-right-min.png';
import { IProps } from './AboutSectionContentImgPhotoBottomRightBtn.types';

const AboutSectionContentImgPhotoBottomRightBtn: FC<IProps> = ({
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
        <PhotoBottomRight
          src={photoBottomRight}
          alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 41'
        />
      </AboutSectionContentImagesBtn>
      <PhotoBottomRightMarker>
        <AboutSectionContentImagesMarker isCurrentStep={isCurrentStep} />
      </PhotoBottomRightMarker>
    </Container>
  );
};

export default AboutSectionContentImgPhotoBottomRightBtn;
