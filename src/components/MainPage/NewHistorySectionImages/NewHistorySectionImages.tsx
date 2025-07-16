import { FC } from 'react';
import leftDecorativeImg from '@/images/newHistory/left-decorative-img.png';
import rightDecorativeImg from '@/images/newHistory/right-decorative-img.png';
import sectionBg from '@/images/newHistory/section-bg.png';
import {
  BackgroundImg,
  LeftDecorativeImg,
  RightDecorativeImg,
} from './NewHistorySectionImages.styled';

const NewHistorySectionImages: FC = () => {
  return (
    <>
      <BackgroundImg src={sectionBg} alt='' />
      <LeftDecorativeImg src={leftDecorativeImg} alt='' />
      <RightDecorativeImg src={rightDecorativeImg} alt='' />
    </>
  );
};

export default NewHistorySectionImages;
