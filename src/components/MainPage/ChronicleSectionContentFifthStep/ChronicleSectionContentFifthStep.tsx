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
        <Date>04.09</Date>
        <TitleWrap>
          <ChronicleSectionContentStepTitle>
            Прапор на куполі
          </ChronicleSectionContentStepTitle>
          <Text>
            24 серпня український прапор внесли до сесійної зали, та над
            Верховною Радою він замайорів лише 4 вересня — після вимог опозиції
            та зібрання людей на площі.
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
