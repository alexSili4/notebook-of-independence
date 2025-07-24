import { FC } from 'react';
import photo from '@/images/chronicle/fourthStep/photo.png';
import statistics from '@/images/chronicle/fourthStep/statistics.png';
import ukraine from '@/images/chronicle/fourthStep/ukraine.png';
import {
  Photo,
  Statistics,
  Text,
  TextWrap,
  Ukraine,
} from './ChronicleSectionContentFourthStepDecorativeElements.styled';

const ChronicleSectionContentFourthStepDecorativeElements: FC = () => {
  return (
    <>
      <Photo src={photo} alt='' />
      <Statistics src={statistics} alt='' />
      <Ukraine src={ukraine} alt='' />
      <TextWrap>
        <Text>Найбільша явка виборців за всю історію незалежної України</Text>
      </TextWrap>
    </>
  );
};

export default ChronicleSectionContentFourthStepDecorativeElements;
