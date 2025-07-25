import { FC } from 'react';
import {
  Date,
  Text,
  TextWrap,
  Title,
  TitleWrap,
} from './ChronicleSectionContentSecondStep.styled';
import ChronicleSectionContentStepContainer from '@MainPageComponents/ChronicleSectionContentStepContainer';
import AnimatedChronicleSectionContentSecondStepDecorativeElements from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentSecondStepDecorativeElements';
import { IProps } from './ChronicleSectionContentSecondStep.types';

const ChronicleSectionContentSecondStep: FC<IProps> = ({
  animationBounce,
  animationDuration,
  inView,
}) => {
  return (
    <ChronicleSectionContentStepContainer>
      <AnimatedChronicleSectionContentSecondStepDecorativeElements
        animationBounce={animationBounce}
        animationDuration={animationDuration}
        inView={inView}
      />
      <TextWrap>
        <Date>23.08</Date>
        <TitleWrap>
          <Title>Чернетка, яка змінила країну</Title>
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
