import { FC } from 'react';
import {
  TextWrap,
  Date,
  Text,
  TitleWrap,
} from './ChronicleSectionContentFirstStep.styled';
import AnimatedChronicleSectionContentFirstStepDecorativeElements from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentFirstStepDecorativeElements';
import ChronicleSectionContentStepContainer from '@MainPageComponents/ChronicleSectionContentStepContainer';
import { IProps } from './ChronicleSectionContentFirstStep.types';
import ChronicleSectionContentStepTitle from '@MainPageComponents/ChronicleSectionContentStepTitle';

const ChronicleSectionContentFirstStep: FC<IProps> = ({
  animationBounce,
  animationDuration,
  inView,
  isDesk,
}) => {
  return (
    <ChronicleSectionContentStepContainer>
      <TextWrap>
        <Date>16.07</Date>
        <TitleWrap>
          <ChronicleSectionContentStepTitle>
            Суверенітет: перший крок
          </ChronicleSectionContentStepTitle>
          <Text>
            Верховна Рада ухвалила Декларацію про державний суверенітет України.
            Це був перший документ, що проголосив пріоритет українських законів
            над радянськими. Незалежність стала питанням часу.
          </Text>
        </TitleWrap>
      </TextWrap>
      <AnimatedChronicleSectionContentFirstStepDecorativeElements
        animationBounce={animationBounce}
        animationDuration={animationDuration}
        inView={inView}
        isDesk={isDesk}
      />
    </ChronicleSectionContentStepContainer>
  );
};

export default ChronicleSectionContentFirstStep;
