import { FC } from 'react';
import photoLeft from '@/images/chronicle/thirdStep/photo-left.png';
import photoRight from '@/images/chronicle/thirdStep/photo-right.png';
import {
  PhotoLeft,
  PhotoRight,
  Text,
  TextWrap,
} from './ChronicleSectionContentThirdStepDecorativeElements.styled';

const ChronicleSectionContentThirdStepDecorativeElements: FC = () => {
  return (
    <>
      <PhotoLeft src={photoLeft} alt='' />
      <PhotoRight src={photoRight} alt='' />
      <TextWrap>
        <Text>
          Частина депутатів навіть не вірила, що це матиме юридичну силу.
        </Text>
      </TextWrap>
    </>
  );
};

export default ChronicleSectionContentThirdStepDecorativeElements;
