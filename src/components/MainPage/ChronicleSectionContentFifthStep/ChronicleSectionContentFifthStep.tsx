import { FC } from 'react';
import ChronicleSectionContentStepContainer from '@MainPageComponents/ChronicleSectionContentStepContainer';
import ChronicleSectionContentFifthStepDecorativeElements from '@MainPageComponents/ChronicleSectionContentFifthStepDecorativeElements';
import {
  TextWrap,
  Date,
  Text,
  Title,
  TitleWrap,
} from './ChronicleSectionContentFifthStep.styled';

const ChronicleSectionContentFifthStep: FC = () => {
  return (
    <ChronicleSectionContentStepContainer>
      <TextWrap>
        <Date>04.08</Date>
        <TitleWrap>
          <Title>Прапор на куполі</Title>
          <Text>
            Перший синьо-жовтий прапор над Верховною Радою підняли лише на
            десятий день незалежності, хоч парламентська комуністична більшість
            не бажала цього. Цей прапор став доказом, що Незалежність жива.
          </Text>
        </TitleWrap>
      </TextWrap>
      <ChronicleSectionContentFifthStepDecorativeElements />
    </ChronicleSectionContentStepContainer>
  );
};

export default ChronicleSectionContentFifthStep;
