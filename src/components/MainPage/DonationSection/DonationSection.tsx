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
import sectionBgDesk from '@/images/donation/section-bg-desk.png';
import sectionBgMob from '@/images/donation/section-bg-mob.png';
import AnimatedDonationSectionPaymentDetails from '@AnimatedMainPageComponents/AnimatedDonationSectionPaymentDetails';
import { IProps } from './DonationSection.types';
import DonationSectionDecorativeElements from '@MainPageComponents/DonationSectionDecorativeElements';
import { theme } from '@/constants';

const DonationSection: FC<IProps> = ({ animationDuration, inView }) => {
  const deskMedia = `(min-width: ${theme.breakpoints.desk}px)`;

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
          <BackgroundImg>
            <source srcSet={sectionBgDesk} media={deskMedia} />
            <img src={sectionBgMob} alt='' />
          </BackgroundImg>
          <BackgroundTexture src={sectionTexture} alt='' />
        </Background>
      </GeneralContainer>
    </Section>
  );
};

export default DonationSection;
