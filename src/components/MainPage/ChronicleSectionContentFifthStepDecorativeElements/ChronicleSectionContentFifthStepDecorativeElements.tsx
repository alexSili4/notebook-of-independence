import { FC } from 'react';
import yellowColor from '@/images/chronicle/fifthStep/yellow-color.png';
import photoLeft from '@/images/chronicle/fifthStep/photo-left.png';
import photoRight from '@/images/chronicle/fifthStep/photo-right.png';
import blueColor from '@/images/chronicle/fifthStep/blue-color.png';
import {
  PhotoLeft,
  BlueColor,
  PhotoRight,
  Text,
  TextWrap,
  YellowColor,
} from './ChronicleSectionContentFifthStepDecorativeElements.styled';

const ChronicleSectionContentFifthStepDecorativeElements: FC = () => {
  return (
    <>
      <PhotoLeft src={photoLeft} alt='' />
      <PhotoRight src={photoRight} alt='' />
      <BlueColor src={blueColor} alt='' />
      <YellowColor src={yellowColor} alt='' />
      <TextWrap>
        <Text>
          Тисячі українців з вигуками "Ганьба!" прорвали кордон міліції і
          змусили зняти прапор УРСР
        </Text>
      </TextWrap>
    </>
  );
};

export default ChronicleSectionContentFifthStepDecorativeElements;
