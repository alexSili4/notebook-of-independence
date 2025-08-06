import { FC } from 'react';
import { Container } from './ChronicleSectionContent.styled';
import { IProps } from './ChronicleSectionContent.types';
import AnimatedChronicleSectionContentPreview from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentPreview';
import AnimatedChronicleSectionContentFirstStep from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentFirstStep';
import AnimatedChronicleSectionContentSecondStep from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentSecondStep';
import AnimatedChronicleSectionContentThirdStep from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentThirdStep';
import AnimatedChronicleSectionContentFourthStep from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentFourthStep';
import AnimatedChronicleSectionContentFifthStep from '@AnimatedMainPageComponents/AnimatedChronicleSectionContentFifthStep';

const ChronicleSectionContent: FC<IProps> = ({
  animationDuration,
  sectionInView,
  firstStepInView,
  animationBounce,
  secondStepInView,
  thirdStepInView,
  fourthStepInView,
  fifthStepInView,
  isDesk,
}) => {
  return (
    <Container>
      <AnimatedChronicleSectionContentPreview
        animationDuration={animationDuration}
        inView={sectionInView}
        nextSectionInView={firstStepInView}
        animationBounce={animationBounce}
      />
      <AnimatedChronicleSectionContentFirstStep
        animationDuration={animationDuration}
        nextSectionInView={secondStepInView}
        animationBounce={animationBounce}
        inView={firstStepInView}
        isDesk={isDesk}
      />
      <AnimatedChronicleSectionContentSecondStep
        animationDuration={animationDuration}
        nextSectionInView={thirdStepInView}
        animationBounce={animationBounce}
        inView={secondStepInView}
        isDesk={isDesk}
      />
      <AnimatedChronicleSectionContentThirdStep
        animationDuration={animationDuration}
        nextSectionInView={fourthStepInView}
        animationBounce={animationBounce}
        inView={thirdStepInView}
        isDesk={isDesk}
      />
      <AnimatedChronicleSectionContentFourthStep
        animationDuration={animationDuration}
        nextSectionInView={fifthStepInView}
        animationBounce={animationBounce}
        inView={fourthStepInView}
        isDesk={isDesk}
      />
      <AnimatedChronicleSectionContentFifthStep
        animationDuration={animationDuration}
        nextSectionInView={false}
        animationBounce={animationBounce}
        inView={fifthStepInView}
        isDesk={isDesk}
      />
    </Container>
  );
};

export default ChronicleSectionContent;
