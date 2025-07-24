import { FC } from 'react';
import ChronicleSectionContentStepContainer from '@MainPageComponents/ChronicleSectionContentStepContainer';
import ChronicleSectionContentThirdStepDecorativeElements from '@MainPageComponents/ChronicleSectionContentThirdStepDecorativeElements';
import {
  TextWrap,
  Date,
  Text,
  Title,
  TitleWrap,
} from './ChronicleSectionContentThirdStep.styled';

const ChronicleSectionContentThirdStep: FC = () => {
  return (
    <ChronicleSectionContentStepContainer>
      <TextWrap>
        <Date>24.08</Date>
        <TitleWrap>
          <Title>Голос, що почув увесь світ</Title>
          <Text>
            346 з 360 депутатів проголосували «за» Акт Незалежності України. У
            залі панувала тиша, а потім — овації. Цим голосуванням ми вирвали
            державу з лещат минулого.
          </Text>
        </TitleWrap>
      </TextWrap>
      <ChronicleSectionContentThirdStepDecorativeElements />
    </ChronicleSectionContentStepContainer>
  );
};

export default ChronicleSectionContentThirdStep;
