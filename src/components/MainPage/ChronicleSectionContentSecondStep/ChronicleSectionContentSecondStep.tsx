import { FC } from 'react';
import {
  Date,
  Text,
  TextWrap,
  Title,
  TitleWrap,
} from './ChronicleSectionContentSecondStep.styled';
import ChronicleSectionContentStepContainer from '@MainPageComponents/ChronicleSectionContentStepContainer';
import ChronicleSectionContentSecondStepDecorativeElements from '@MainPageComponents/ChronicleSectionContentSecondStepDecorativeElements';

const ChronicleSectionContentSecondStep: FC = () => {
  return (
    <ChronicleSectionContentStepContainer>
      <ChronicleSectionContentSecondStepDecorativeElements />
      <TextWrap>
        <Date>23.08</Date>
        <TitleWrap>
          <Title>Чернетка, яка змінила країну</Title>
          <Text>
            Левко Лукʼяненко написав чернетку Акта Незалежності за півтори
            години. У звичайному учнівському зошиті, кульковою ручкою.
            <br />
            Без нотаток, без редагування.
          </Text>
        </TitleWrap>
      </TextWrap>
    </ChronicleSectionContentStepContainer>
  );
};

export default ChronicleSectionContentSecondStep;
