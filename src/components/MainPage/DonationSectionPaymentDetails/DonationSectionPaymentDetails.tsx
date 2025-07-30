import { FC } from 'react';
import { Container } from './DonationSectionPaymentDetails.styled';
import DonationSectionPaymentDetailsList from '@MainPageComponents/DonationSectionPaymentDetailsList';
import DonationSectionPaymentDetailsDevelopers from '@MainPageComponents/DonationSectionPaymentDetailsDevelopers';
import DecorativeBg from '@MainPageComponents/DecorativeBg';

const DonationSectionPaymentDetails: FC = () => {
  return (
    <Container>
      <DecorativeBg />
      <DonationSectionPaymentDetailsList />
      <DonationSectionPaymentDetailsDevelopers />
    </Container>
  );
};

export default DonationSectionPaymentDetails;
