import { FC } from 'react';
import ChronicleSectionContentStepContainer from '@MainPageComponents/ChronicleSectionContentStepContainer';
import ChronicleSectionContentFourthStepDecorativeElements from '@MainPageComponents/ChronicleSectionContentFourthStepDecorativeElements';
import {
  TextWrap,
  Date,
  Text,
  Title,
  TitleWrap,
} from './ChronicleSectionContentFourthStep.styled';

const ChronicleSectionContentFourthStep: FC = () => {
  return (
    <ChronicleSectionContentStepContainer>
      <ChronicleSectionContentFourthStepDecorativeElements />
      <TextWrap>
        <Date>01.12</Date>
        <TitleWrap>
          <Title>Україна сказала «Так»</Title>
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
