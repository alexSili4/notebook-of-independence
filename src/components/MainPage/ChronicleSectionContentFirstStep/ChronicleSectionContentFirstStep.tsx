import { FC } from 'react';
import {
  TextWrap,
  Date,
  Text,
  Title,
  TitleWrap,
} from './ChronicleSectionContentFirstStep.styled';
import AnimatedChronicleSectionContentFirstStepDecorativeElements from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentFirstStepDecorativeElements';
import ChronicleSectionContentStepContainer from '@MainPageComponents/ChronicleSectionContentStepContainer';
import { IProps } from './ChronicleSectionContentFirstStep.types';

const ChronicleSectionContentFirstStep: FC<IProps> = ({
  animationBounce,
  animationDuration,
  inView,
}) => {
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
      <AnimatedChronicleSectionContentFirstStepDecorativeElements
        animationBounce={animationBounce}
        animationDuration={animationDuration}
        inView={inView}
      />
    </ChronicleSectionContentStepContainer>
  );
};

export default ChronicleSectionContentFirstStep;
