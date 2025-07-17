import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { Background, Container } from './AboutSectionContent.styled';
import AboutSectionContentText from '@MainPageComponents/AboutSectionContentText';
import AboutSectionContentImages from '@MainPageComponents/AboutSectionContentImages';

const AboutSectionContent: FC = () => {
  return (
    <GeneralContainer>
      <Background>
        <Container>
          <AboutSectionContentImages />
          <AboutSectionContentText />
        </Container>
      </Background>
    </GeneralContainer>
  );
};

export default AboutSectionContent;
