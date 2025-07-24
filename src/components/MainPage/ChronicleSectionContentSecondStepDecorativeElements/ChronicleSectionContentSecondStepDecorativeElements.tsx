import { FC } from 'react';
import photo from '@/images/chronicle/secondStep/photo.png';
import pageLight from '@/images/chronicle/secondStep/page-light.png';
import pageDark from '@/images/chronicle/secondStep/page-dark.png';
import {
  Photo,
  PageDark,
  PageLight,
  Text,
  TextWrap,
} from './ChronicleSectionContentSecondStepDecorativeElements.styled';

const ChronicleSectionContentSecondStepDecorativeElements: FC = () => {
  return (
    <>
      <Photo src={photo} alt='' />
      <PageLight src={pageLight} alt='' />
      <PageDark src={pageDark} alt='' />
      <TextWrap>
        <Text>
          Текст документа свідомо скоротили до мінімального обсягу, щоб уникнути
          довгих дискусій. Надії мільйонів помістилися на одному листочку...
        </Text>
      </TextWrap>
    </>
  );
};

export default ChronicleSectionContentSecondStepDecorativeElements;
