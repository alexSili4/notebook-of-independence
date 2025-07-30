import { FC } from 'react';
import {
  Section,
  Background,
  Container,
  BackgroundImg,
  BackgroundTexture,
} from './DonationSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import DonationSectionLinks from '@MainPageComponents/DonationSectionLinks';
import DonationSectionPaymentDetails from '@MainPageComponents/DonationSectionPaymentDetails';
import sectionTexture from '@/images/donation/section-texture.png';
import sectionBg from '@/images/donation/section-bg.png';

const DonationSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <Background>
          <Container>
            <DonationSectionLinks />
            <DonationSectionPaymentDetails />
          </Container>
          <BackgroundImg src={sectionBg} alt='' />
          <BackgroundTexture src={sectionTexture} alt='' />
        </Background>
      </GeneralContainer>
    </Section>
  );
};

export default DonationSection;
