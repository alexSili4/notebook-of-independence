import { FC } from 'react';
import {
  Section,
  Background,
  Container,
  BackgroundImg,
  BackgroundTexture,
} from './DonationSection.styled';
import DonationSectionLinks from '@MainPageComponents/DonationSectionLinks';
import sectionTexture from '@/images/donation/section-texture-min.png';
import sectionBgDesk from '@/images/donation/section-bg-desk-min.png';
import sectionBgMob from '@/images/donation/section-bg-mob-min.png';
import AnimatedDonationSectionPaymentDetails from '@AnimatedMainPageComponents/AnimatedDonationSectionPaymentDetails';
import { IProps } from './DonationSection.types';
import DonationSectionDecorativeElements from '@MainPageComponents/DonationSectionDecorativeElements';
import { theme } from '@/constants';
import DonationSectionPaymentDetailsDevelopers from '@MainPageComponents/DonationSectionPaymentDetailsDevelopers';

const DonationSection: FC<IProps> = ({
  animationDuration,
  inView,
  onGoBackBtnClick,
}) => {
  const deskMedia = `(min-width: ${theme.breakpoints.desk}px)`;

  return (
    <Section>
      <Background>
        <Container>
          <DonationSectionDecorativeElements />
          <DonationSectionLinks onGoBackBtnClick={onGoBackBtnClick} />
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
      <DonationSectionPaymentDetailsDevelopers />
    </Section>
  );
};

export default DonationSection;
