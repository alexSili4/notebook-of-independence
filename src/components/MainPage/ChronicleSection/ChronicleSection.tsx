import { FC } from 'react';
import { Section, Background, Container } from './ChronicleSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import ChronicleSectionContent from '@MainPageComponents/ChronicleSectionContent';
import ChronicleSectionProgressBar from '@MainPageComponents/ChronicleSectionProgressBar';
import { IProps } from './ChronicleSection.types';

const ChronicleSection: FC<IProps> = ({
  contentInView,
  fifthStepInView,
  firstStepInView,
  fourthStepInView,
  secondStepInView,
  thirdStepInView,
  sectionInView,
  animationDuration,
}) => {
  return (
    <Section>
      <GeneralContainer>
        <Background contentInView={contentInView}>
          <Container>
            <ChronicleSectionContent
              animationDuration={animationDuration}
              sectionInView={sectionInView}
            />
            <ChronicleSectionProgressBar
              contentInView={contentInView}
              fifthStepInView={fifthStepInView}
              firstStepInView={firstStepInView}
              fourthStepInView={fourthStepInView}
              secondStepInView={secondStepInView}
              thirdStepInView={thirdStepInView}
            />
          </Container>
        </Background>
      </GeneralContainer>
    </Section>
  );
};

export default ChronicleSection;
