import { FC } from 'react';
import { Container, Title } from './DonationSectionPaymentDetails.styled';
import DonationSectionPaymentDetailsList from '@MainPageComponents/DonationSectionPaymentDetailsList';
import DecorativeBg from '@MainPageComponents/DecorativeBg';

const DonationSectionPaymentDetails: FC = () => {
  return (
    <Container>
      <DecorativeBg />
      <DonationSectionPaymentDetailsList />
      <Title>Реквізити для донатів надані ГО «Азов.Супровід»</Title>
    </Container>
  );
};

export default DonationSectionPaymentDetails;
