import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { Background, Content, Container } from './AboutSectionContent.styled';
import AnimatedAboutSectionContentDecorativeShape from '@AnimatedMainPageComponents/AnimatedAboutSectionContentDecorativeShape';
import AnimatedAboutSectionContentText from '@AnimatedMainPageComponents/AnimatedAboutSectionContentText';
import AnimatedAboutSectionContentImages from '@AnimatedMainPageComponents/AnimatedAboutSectionContentImages';
import AnimatedAboutSectionContentNavLink from '@AnimatedMainPageComponents/AnimatedAboutSectionContentNavLink';
import AnimatedAboutSectionContentVideo from '@AnimatedMainPageComponents/AnimatedAboutSectionContentVideo';
import { IProps } from './AboutSectionContent.types';
import AnimatedAboutSectionContentSlider from '@AnimatedMainPageComponents/AnimatedAboutSectionContentSlider';

const AboutSectionContent: FC<IProps> = ({
  decorativeShapeInView,
  animationDuration,
  videoInView,
}) => {
  return (
    <Container>
      <AnimatedAboutSectionContentDecorativeShape
        animationDuration={animationDuration}
        inView={decorativeShapeInView}
      />
      <GeneralContainer>
        <Background>
          <Content>
            <AnimatedAboutSectionContentImages
              animationDuration={animationDuration}
              inView={!videoInView}
            />
            <AnimatedAboutSectionContentText
              animationDuration={animationDuration}
              inView={!videoInView}
            />
            <AnimatedAboutSectionContentNavLink
              animationDuration={animationDuration}
              inView={!videoInView}
            />
            <AnimatedAboutSectionContentVideo
              animationDuration={animationDuration}
              inView={videoInView}
            />
            <AnimatedAboutSectionContentSlider animationDuration={1} />
          </Content>
        </Background>
      </GeneralContainer>
    </Container>
  );
};

export default AboutSectionContent;
