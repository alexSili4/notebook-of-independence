import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import { Section, Container, TextWrap, Background } from './HeroSection.styled';
import AnimatedHeroSectionTitle from '@AnimatedMainPageComponents/AnimatedHeroSectionTitle';
import { IProps } from './HeroSection.types';
import AnimatedHeroSectionVideo from '@AnimatedMainPageComponents/AnimatedHeroSectionVideo';
import AnimatedHeroSectionText from '@AnimatedMainPageComponents/AnimatedHeroSectionText';
import AnimatedHeroSectionPersonalSignatureIcon from '@AnimatedMainPageComponents/AnimatedHeroSectionPersonalSignatureIcon';

const HeroSection: FC<IProps> = ({
  animationDelay,
  animationDuration,
  videoInView,
}) => {
  return (
    <Section>
      <GeneralContainer>
        <Background>
          <Container>
            <AnimatedHeroSectionTitle
              animationDuration={animationDuration}
              animationDelay={animationDelay}
              inView
            />
            <TextWrap>
              <AnimatedHeroSectionText
                animationDelay={animationDelay}
                animationDuration={animationDuration}
                inView
              />
              <AnimatedHeroSectionPersonalSignatureIcon
                animationDelay={animationDelay}
                animationDuration={animationDuration}
                inView
              />
            </TextWrap>
            <AnimatedHeroSectionVideo
              animationDuration={animationDuration}
              animationDelay={animationDelay}
              videoInView={videoInView}
              inView
            />
          </Container>
        </Background>
      </GeneralContainer>
    </Section>
  );
};

export default HeroSection;
