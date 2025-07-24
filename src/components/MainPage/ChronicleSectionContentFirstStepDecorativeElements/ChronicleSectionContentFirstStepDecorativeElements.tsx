import { FC } from 'react';
import decorativeImg from '@/images/chronicle/firstStep/decorative-img.png';
import photo from '@/images/chronicle/firstStep/photo.png';
import {
  Image,
  Text,
  TextWrap,
  Photo,
  PhotoDesc,
  PhotoDescWrap,
  PhotoWrap,
} from './ChronicleSectionContentFirstStepDecorativeElements.styled';

const ChronicleSectionContentFirstStepDecorativeElements: FC = () => {
  return (
    <>
      <TextWrap>
        <Text>
          Частина депутатів навіть не вірила, що це матиме юридичну силу.
        </Text>
      </TextWrap>
      <Image src={decorativeImg} alt='' />
      <PhotoWrap>
        <Photo src={photo} alt='' />
        <PhotoDescWrap>
          <PhotoDesc>
            Біля стін Верховної Ради проходили мітинги в підтримку ухвалення
            Декларації
          </PhotoDesc>
        </PhotoDescWrap>
      </PhotoWrap>
    </>
  );
};

export default ChronicleSectionContentFirstStepDecorativeElements;
