import { FC } from 'react';
import ChronicleSectionContentStepContainer from '@MainPageComponents/ChronicleSectionContentStepContainer';
import AnimatedChronicleSectionContentFifthStepDecorativeElements from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentFifthStepDecorativeElements';

import {
  TextWrap,
  Date,
  Text,
  TitleWrap,
} from './ChronicleSectionContentFifthStep.styled';
import { IProps } from './ChronicleSectionContentFifthStep.types';
import ChronicleSectionContentStepTitle from '@MainPageComponents/ChronicleSectionContentStepTitle';

const ChronicleSectionContentFifthStep: FC<IProps> = ({
  animationBounce,
  animationDuration,
  inView,
  isDesk,
}) => {
  return (
    <ChronicleSectionContentStepContainer>
      <TextWrap>
        <Date>04.08</Date>
        <TitleWrap>
          <ChronicleSectionContentStepTitle>
            Прапор на куполі
          </ChronicleSectionContentStepTitle>
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
        isDesk={isDesk}
      />
    </ChronicleSectionContentStepContainer>
  );
};

export default ChronicleSectionContentFifthStep;
