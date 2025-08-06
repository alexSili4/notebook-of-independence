import { FC } from 'react';
import { Section } from './AboutSection.styled';
import AboutSectionPreview from '@MainPageComponents/AboutSectionPreview';
import AnimatedAboutSectionContent from '@AnimatedMainPageComponents/AnimatedAboutSectionContent';
import { IProps } from './AboutSection.types';

const AboutSection: FC<IProps> = ({
  contentInView,
  animationDuration,
  sectionInView,
  videoInView,
  isDesk,
}) => {
  return (
    <Section>
      <AboutSectionPreview
        animationDuration={animationDuration}
        sectionInView={sectionInView}
      />
      <AnimatedAboutSectionContent
        inView={contentInView}
        animationDuration={animationDuration}
        videoInView={videoInView}
        isDesk={isDesk}
      />
    </Section>
  );
};

export default AboutSection;
