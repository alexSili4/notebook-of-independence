import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import {
  Section,
  Container,
  Desc,
  PersonalSignatureIcon,
  TextWrap,
  Title,
  Background,
} from './HeroSection.styled';

const HeroSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <Background>
          <Container>
            {/* TODO: video */}
            <Title>Незалежність</Title>
            <TextWrap>
              <Desc>
                У серпні 1991 року Левко Лукʼяненко написав чернетку Акта
                проголошення незалежності України. Він зробив це за півтори
                години, а йшов до цього все життя.
              </Desc>
              <PersonalSignatureIcon />
            </TextWrap>
          </Container>
        </Background>
      </GeneralContainer>
    </Section>
  );
};

export default HeroSection;
