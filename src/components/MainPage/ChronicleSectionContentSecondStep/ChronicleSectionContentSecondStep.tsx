import { FC } from 'react';
import {
  Date,
  Text,
  TextWrap,
  TitleWrap,
} from './ChronicleSectionContentSecondStep.styled';
import ChronicleSectionContentStepContainer from '@MainPageComponents/ChronicleSectionContentStepContainer';
import AnimatedChronicleSectionContentSecondStepDecorativeElements from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentSecondStepDecorativeElements';
import { IProps } from './ChronicleSectionContentSecondStep.types';
import ChronicleSectionContentStepTitle from '@MainPageComponents/ChronicleSectionContentStepTitle';

const ChronicleSectionContentSecondStep: FC<IProps> = ({
  animationBounce,
  animationDuration,
  inView,
  isDesk,
}) => {
  return (
    <ChronicleSectionContentStepContainer>
      <AnimatedChronicleSectionContentSecondStepDecorativeElements
        animationBounce={animationBounce}
        animationDuration={animationDuration}
        inView={inView}
        isDesk={isDesk}
      />
      <TextWrap>
        <Date>23.08</Date>
        <TitleWrap>
          <ChronicleSectionContentStepTitle>
            Чернетка, яка змінила країну
          </ChronicleSectionContentStepTitle>
          <Text>
            Левко Лукʼяненко написав чернетку Акта Незалежності за півтори
            години. У звичайному учнівському зошиті, кульковою ручкою.
            <br />
            Без нотаток, без редагування.
          </Text>
        </TitleWrap>
      </TextWrap>
    </ChronicleSectionContentStepContainer>
  );
};

export default ChronicleSectionContentSecondStep;
