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
import sectionTexture from '@/images/donation/section-texture.png';
import sectionBg from '@/images/donation/section-bg.png';
import AnimatedDonationSectionPaymentDetails from '@AnimatedMainPageComponents/AnimatedDonationSectionPaymentDetails';
import { IProps } from './DonationSection.types';
import DonationSectionDecorativeElements from '@MainPageComponents/DonationSectionDecorativeElements';

const DonationSection: FC<IProps> = ({ animationDuration, inView }) => {
  return (
    <Section>
      <GeneralContainer>
        <Background>
          <Container>
            <DonationSectionDecorativeElements />
            <DonationSectionLinks />
            <AnimatedDonationSectionPaymentDetails
              animationDuration={animationDuration}
              inView={inView}
            />
          </Container>
          <BackgroundImg src={sectionBg} alt='' />
          <BackgroundTexture src={sectionTexture} alt='' />
        </Background>
      </GeneralContainer>
    </Section>
  );
};

export default DonationSection;
