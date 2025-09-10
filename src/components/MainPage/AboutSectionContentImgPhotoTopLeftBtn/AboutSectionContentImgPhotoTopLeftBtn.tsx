import { FC } from 'react';
import {
  PhotoTopLeftBtnWrap,
  PhotoTopLeft,
  PhotoTopLeftMarker,
} from './AboutSectionContentImgPhotoTopLeftBtn.styled';
import AboutSectionContentImagesMarker from '@MainPageComponents/AboutSectionContentImagesMarker';
import AboutSectionContentImagesBtn from '@MainPageComponents/AboutSectionContentImagesBtn';
import photoTopLeft from '@/images/about/photo-top-left-min.png';
import { IProps } from './AboutSectionContentImgPhotoTopLeftBtn.types';

const AboutSectionContentImgPhotoTopLeftBtn: FC<IProps> = ({
  onClick,
  isCurrentStep,
  onMouseEnter,
}) => {
  return (
    <PhotoTopLeftBtnWrap>
      <AboutSectionContentImagesBtn
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      >
        <PhotoTopLeft
          src={photoTopLeft}
          alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 34'
        />
      </AboutSectionContentImagesBtn>
      <PhotoTopLeftMarker>
        <AboutSectionContentImagesMarker isCurrentStep={isCurrentStep} />
      </PhotoTopLeftMarker>
    </PhotoTopLeftBtnWrap>
  );
};

export default AboutSectionContentImgPhotoTopLeftBtn;
