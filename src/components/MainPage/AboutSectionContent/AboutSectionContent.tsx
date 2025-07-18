import { FC, useState } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import {
  Background,
  Content,
  Container,
  DecorativeShape,
} from './AboutSectionContent.styled';
import AboutSectionContentText from '@MainPageComponents/AboutSectionContentText';
import AboutSectionContentImages from '@MainPageComponents/AboutSectionContentImages';
import AboutSectionContentNavLink from '@MainPageComponents/AboutSectionContentNavLink';
import AboutSectionContentVideo from '@MainPageComponents/AboutSectionContentVideo';

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
      <Container>
        <DecorativeShape></DecorativeShape>
        <Background>
          <Content>
            <AboutSectionContentImages
              incrementCurrentStep={incrementCurrentStep}
              currentStep={currentStep}
            />
            <AboutSectionContentText />
            <AboutSectionContentNavLink />
            <AboutSectionContentVideo />
          </Content>
        </Background>
      </Container>
    </GeneralContainer>
  );
};

export default AboutSectionContent;
