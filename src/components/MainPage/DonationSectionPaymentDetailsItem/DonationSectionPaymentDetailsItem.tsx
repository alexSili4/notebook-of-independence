import { FC } from 'react';
import {
  Container,
  CopyBtn,
  CopyIcon,
  FaCheckIcon,
  Text,
  TextWrap,
  Title,
} from './DonationSectionPaymentDetailsItem.styled';
import { IProps } from './DonationSectionPaymentDetailsItem.types';

const DonationSectionPaymentDetailsItem: FC<IProps> = ({
  onCopyBtnClick,
  title,
  value,
  copySuccess,
}) => {
  return (
    <Container>
      <TextWrap>
        <Title>{title}</Title>
        <Text>{value}</Text>
      </TextWrap>
      <CopyBtn type='button' onClick={onCopyBtnClick}>
        <CopyIcon copySuccess={copySuccess} />
        <FaCheckIcon copySuccess={copySuccess} />
      </CopyBtn>
    </Container>
  );
};

export default DonationSectionPaymentDetailsItem;
