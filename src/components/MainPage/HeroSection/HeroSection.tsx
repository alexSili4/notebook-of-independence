import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC, useRef } from 'react';
import { Section, Container, TextWrap, Background } from './HeroSection.styled';
import AnimatedHeroSectionTitle from '@AnimatedMainPageComponents/AnimatedHeroSectionTitle';
import { IProps } from './HeroSection.types';
import AnimatedHeroSectionVideo from '@AnimatedMainPageComponents/AnimatedHeroSectionVideo';
import AnimatedHeroSectionText from '@AnimatedMainPageComponents/AnimatedHeroSectionText';
import { useInView } from 'framer-motion';
import AnimatedHeroSectionPersonalSignatureIcon from '@AnimatedMainPageComponents/AnimatedHeroSectionPersonalSignatureIcon';

const HeroSection: FC<IProps> = ({
  animationDelay,
  animationDuration,
  isFullScreen,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef);

  return (
    <Section ref={sectionRef}>
      <GeneralContainer>
        <Background>
          <Container>
            <AnimatedHeroSectionTitle
              animationDuration={animationDuration}
              animationDelay={animationDelay}
              inView={inView}
            />
            <TextWrap>
              <AnimatedHeroSectionText
                inView={inView}
                animationDelay={animationDelay}
                animationDuration={animationDuration}
              />
              <AnimatedHeroSectionPersonalSignatureIcon
                inView={inView}
                animationDelay={animationDelay}
                animationDuration={animationDuration}
              />
            </TextWrap>
            <AnimatedHeroSectionVideo
              animationDuration={10}
              animationDelay={animationDelay}
              inView={inView}
              isFullScreen={isFullScreen}
            />
          </Container>
        </Background>
      </GeneralContainer>
    </Section>
  );
};

export default HeroSection;
