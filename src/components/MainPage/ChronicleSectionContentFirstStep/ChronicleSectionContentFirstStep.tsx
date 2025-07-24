import { FC } from 'react';
import {
  TextWrap,
  Date,
  Text,
  Title,
  TitleWrap,
} from './ChronicleSectionContentFirstStep.styled';
import ChronicleSectionContentFirstStepDecorativeElements from '@MainPageComponents/ChronicleSectionContentFirstStepDecorativeElements';
import ChronicleSectionContentStepContainer from '@MainPageComponents/ChronicleSectionContentStepContainer';

const ChronicleSectionContentFirstStep: FC = () => {
  return (
    <ChronicleSectionContentStepContainer>
      <TextWrap>
        <Date>16.07</Date>
        <TitleWrap>
          <Title>Прапор на куполі</Title>
          <Text>
            Перший синьо-жовтий прапор над Верховною Радою підняли лише на
            десятий день незалежності, хоч парламентська комуністична більшість
            не бажала цього. Цей прапор став доказом, що Незалежність жива.
          </Text>
        </TitleWrap>
      </TextWrap>
      <ChronicleSectionContentFirstStepDecorativeElements />
    </ChronicleSectionContentStepContainer>
  );
};

export default ChronicleSectionContentFirstStep;
