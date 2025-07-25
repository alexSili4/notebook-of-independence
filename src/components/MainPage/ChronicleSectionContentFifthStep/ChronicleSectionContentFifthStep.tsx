import { FC } from 'react';
import ChronicleSectionContentStepContainer from '@MainPageComponents/ChronicleSectionContentStepContainer';
import AnimatedChronicleSectionContentFifthStepDecorativeElements from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentFifthStepDecorativeElements';

import {
  TextWrap,
  Date,
  Text,
  Title,
  TitleWrap,
} from './ChronicleSectionContentFifthStep.styled';
import { IProps } from './ChronicleSectionContentFifthStep.types';

const ChronicleSectionContentFifthStep: FC<IProps> = ({
  animationBounce,
  animationDuration,
  inView,
}) => {
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
      <AnimatedChronicleSectionContentFifthStepDecorativeElements
        animationBounce={animationBounce}
        animationDuration={animationDuration}
        inView={inView}
      />
    </ChronicleSectionContentStepContainer>
  );
};

export default ChronicleSectionContentFifthStep;
