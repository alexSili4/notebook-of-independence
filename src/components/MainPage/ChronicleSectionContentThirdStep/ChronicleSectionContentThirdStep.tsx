import { FC } from 'react';
import ChronicleSectionContentStepContainer from '@MainPageComponents/ChronicleSectionContentStepContainer';
import AnimatedChronicleSectionContentThirdStepDecorativeElements from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentThirdStepDecorativeElements';
import {
  TextWrap,
  Date,
  Text,
  Title,
  TitleWrap,
} from './ChronicleSectionContentThirdStep.styled';
import { IProps } from './ChronicleSectionContentThirdStep.types';

const ChronicleSectionContentThirdStep: FC<IProps> = ({
  animationBounce,
  animationDuration,
  inView,
}) => {
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
      <AnimatedChronicleSectionContentThirdStepDecorativeElements
        animationBounce={animationBounce}
        animationDuration={animationDuration}
        inView={inView}
      />
    </ChronicleSectionContentStepContainer>
  );
};

export default ChronicleSectionContentThirdStep;
