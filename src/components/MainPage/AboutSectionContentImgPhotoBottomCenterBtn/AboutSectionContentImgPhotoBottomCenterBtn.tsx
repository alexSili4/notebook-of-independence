import { FC } from 'react';
import {
  Container,
  PhotoBottomCenter,
  PhotoBottomCenterMarker,
} from './AboutSectionContentImgPhotoBottomCenterBtn.styled';
import AboutSectionContentImagesBtn from '@MainPageComponents/AboutSectionContentImagesBtn';
import AboutSectionContentImagesMarker from '@MainPageComponents/AboutSectionContentImagesMarker';
import photoBottomCenter from '@/images/about/photo-bottom-center-min.png';
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
        <PhotoBottomCenter
          src={photoBottomCenter}
          alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 32'
        />
      </AboutSectionContentImagesBtn>
      <PhotoBottomCenterMarker>
        <AboutSectionContentImagesMarker isCurrentStep={isCurrentStep} />
      </PhotoBottomCenterMarker>
    </Container>
  );
};

export default AboutSectionContentImgPhotoBottomCenterBtn;
