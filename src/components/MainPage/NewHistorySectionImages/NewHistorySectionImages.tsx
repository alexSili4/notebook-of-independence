import { FC } from 'react';
import leftDecorativeImgMob from '@/images/newHistory/left-decorative-img-mob.png';
import leftDecorativeImgDesk from '@/images/newHistory/left-decorative-img-desk.png';
import rightDecorativeImgDesk from '@/images/newHistory/right-decorative-img-desk.png';
import rightDecorativeImgMob from '@/images/newHistory/right-decorative-img-mob.png';
import sectionBgDesk from '@/images/newHistory/section-bg-desk.png';
import sectionBgMob from '@/images/newHistory/section-bg-mob.png';
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
