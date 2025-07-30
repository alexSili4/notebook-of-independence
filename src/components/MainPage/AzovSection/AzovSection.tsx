import { FC } from 'react';
import {
  Section,
  Background,
  Container,
  Content,
  Title,
  TitleWrap,
  LogoIcon,
  TitleContainer,
  LineIcon,
} from './AzovSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AzovSectionText from '@MainPageComponents/AzovSectionText';
import AnimatedAzovSectionStarIcon from '@AnimatedMainPageComponents/AnimatedAzovSectionStarIcon';
import { IProps } from './AzovSection.types';

const AzovSection: FC<IProps> = ({ animationDuration, inView }) => {
  return (
    <Section>
      <GeneralContainer>
        <Background>
          <Container>
            <Content>
              <LogoIcon />
              <AzovSectionText
                animationDuration={animationDuration}
                inView={inView}
              />
            </Content>
            <TitleContainer>
              <TitleWrap>
                <Title>100% прибутку НА Азов.Супровід</Title>
                <LineIcon />
              </TitleWrap>
              <AnimatedAzovSectionStarIcon
                animationDuration={animationDuration}
                inView={inView}
              />
            </TitleContainer>
          </Container>
        </Background>
      </GeneralContainer>
    </Section>
  );
};

export default AzovSection;
