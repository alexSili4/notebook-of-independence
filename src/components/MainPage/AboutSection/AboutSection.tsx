import { FC } from 'react';
import { Section } from './AboutSection.styled';
// import AboutSectionPreview from '@MainPageComponents/AboutSectionPreview';
import AboutSectionContent from '@MainPageComponents/AboutSectionContent';

const AboutSection: FC = () => {
  return (
    <Section>
      {/* <AboutSectionPreview /> */}
      <AboutSectionContent />
    </Section>
  );
};

export default AboutSection;
