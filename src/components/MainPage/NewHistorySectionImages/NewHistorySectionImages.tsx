import { FC } from 'react';
import leftDecorativeImgMob from '@/images/newHistory/left-decorative-img-mob-min.png';
import leftDecorativeImgDesk from '@/images/newHistory/left-decorative-img-desk-min.png';
import rightDecorativeImgDesk from '@/images/newHistory/right-decorative-img-desk-min.png';
import rightDecorativeImgMob from '@/images/newHistory/right-decorative-img-mob-min.png';
import sectionBgDesk from '@/images/newHistory/section-bg-desk-min.png';
import sectionBgMob from '@/images/newHistory/section-bg-mob-min.png';
import {
  BackgroundPicture,
  LeftDecorativePicture,
  RightDecorativePicture,
} from './NewHistorySectionImages.styled';
import { theme } from '@/constants';

const NewHistorySectionImages: FC = () => {
  const deskMedia = `(min-width: ${theme.breakpoints.desk}px)`;

  return (
    <>
      <BackgroundPicture>
        <source srcSet={sectionBgDesk} media={deskMedia} />
        <img src={sectionBgMob} alt='' />
      </BackgroundPicture>
      <LeftDecorativePicture>
        <source srcSet={leftDecorativeImgDesk} media={deskMedia} />
        <img src={leftDecorativeImgMob} alt='' />
      </LeftDecorativePicture>
      <RightDecorativePicture>
        <source srcSet={rightDecorativeImgDesk} media={deskMedia} />
        <img src={rightDecorativeImgMob} alt='' />
      </RightDecorativePicture>
    </>
  );
};

export default NewHistorySectionImages;
