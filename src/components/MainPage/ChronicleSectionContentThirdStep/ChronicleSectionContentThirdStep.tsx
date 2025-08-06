import { FC } from 'react';
import ChronicleSectionContentStepContainer from '@MainPageComponents/ChronicleSectionContentStepContainer';
import AnimatedChronicleSectionContentThirdStepDecorativeElements from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentThirdStepDecorativeElements';
import {
  TextWrap,
  Date,
  Text,
  TitleWrap,
} from './ChronicleSectionContentThirdStep.styled';
import { IProps } from './ChronicleSectionContentThirdStep.types';
import ChronicleSectionContentStepTitle from '@MainPageComponents/ChronicleSectionContentStepTitle';

const ChronicleSectionContentThirdStep: FC<IProps> = ({
  animationBounce,
  animationDuration,
  inView,
  isDesk,
}) => {
  return (
    <ChronicleSectionContentStepContainer>
      <TextWrap>
        <Date>24.08</Date>
        <TitleWrap>
          <ChronicleSectionContentStepTitle>
            Голос, що почув увесь світ
          </ChronicleSectionContentStepTitle>
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
        isDesk={isDesk}
      />
    </ChronicleSectionContentStepContainer>
  );
};

export default ChronicleSectionContentThirdStep;
