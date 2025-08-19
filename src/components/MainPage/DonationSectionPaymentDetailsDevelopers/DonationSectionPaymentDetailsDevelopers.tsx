import { ExternalLinks } from '@/constants';
import { FC } from 'react';
import {
  Container,
  Copyright,
  SunLink,
} from './DonationSectionPaymentDetailsDevelopers.styled';

const DonationSectionPaymentDetailsDevelopers: FC = () => {
  return (
    <Container>
      <Copyright>© Silpo, 2025</Copyright>
      <SunLink
        href={ExternalLinks.sun}
        target='_blank'
        rel='noopener noreferrer'
      >
        Зроблено Сонцем ●
      </SunLink>
    </Container>
  );
};

export default DonationSectionPaymentDetailsDevelopers;
