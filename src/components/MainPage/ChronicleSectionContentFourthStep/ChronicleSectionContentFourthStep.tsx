import { FC } from 'react';
import ChronicleSectionContentStepContainer from '@MainPageComponents/ChronicleSectionContentStepContainer';
import AnimatedChronicleSectionContentFourthStepDecorativeElements from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentFourthStepDecorativeElements';
import {
  TextWrap,
  Date,
  Text,
  TitleWrap,
} from './ChronicleSectionContentFourthStep.styled';
import { IProps } from './ChronicleSectionContentFourthStep.types';
import ChronicleSectionContentStepTitle from '@MainPageComponents/ChronicleSectionContentStepTitle';

const ChronicleSectionContentFourthStep: FC<IProps> = ({
  animationBounce,
  animationDuration,
  inView,
  isDesk,
}) => {
  return (
    <ChronicleSectionContentStepContainer>
      <AnimatedChronicleSectionContentFourthStepDecorativeElements
        animationBounce={animationBounce}
        animationDuration={animationDuration}
        inView={inView}
        isDesk={isDesk}
      />
      <TextWrap>
        <Date>01.12</Date>
        <TitleWrap>
          <ChronicleSectionContentStepTitle>
            Україна сказала «Так»
          </ChronicleSectionContentStepTitle>
          <Text>
            90,32% українців на референдумі підтвердили Незалежність.
            <br />
            Кожна область — від Львова до Луганська, від Києва до Криму —
            сказала «Так». Це була згода всієї країни. Вперше — і назавжди.
          </Text>
        </TitleWrap>
      </TextWrap>
    </ChronicleSectionContentStepContainer>
  );
};

export default ChronicleSectionContentFourthStep;
