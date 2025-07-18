import { FC, useState } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { Background, Container } from './AboutSectionContent.styled';
import AboutSectionContentText from '@MainPageComponents/AboutSectionContentText';
import AboutSectionContentImages from '@MainPageComponents/AboutSectionContentImages';
import AboutSectionContentNavLink from '@MainPageComponents/AboutSectionContentNavLink';

const AboutSectionContent: FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const incrementCurrentStep = (isCurrentStep: boolean) => {
    if (!isCurrentStep) {
      return;
    }

    setCurrentStep((prevState) => (prevState += 1));
  };

  return (
    <GeneralContainer>
      <Background>
        <Container>
          <AboutSectionContentImages
            incrementCurrentStep={incrementCurrentStep}
            currentStep={currentStep}
          />
          <AboutSectionContentText />
          <AboutSectionContentNavLink />
        </Container>
      </Background>
    </GeneralContainer>
  );
};

export default AboutSectionContent;
