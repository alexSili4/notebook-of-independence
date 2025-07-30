import { FC, useState } from 'react';
import DonationSectionPaymentDetailsItem from '@MainPageComponents/DonationSectionPaymentDetailsItem';
import paymentDetails from '@/constants/paymentDetails';
import { copyToClipboard } from '@/utils';
import { Func } from '@/types/functions.types';
import { regExp } from '@/constants';
import { List, ListItem } from './DonationSectionPaymentDetailsList.styled';

const DonationSectionPaymentDetailsList: FC = () => {
  const [ibanCopy, setIbanCopy] = useState<boolean>(false);
  const [edrpouCopy, setEdrpouCopy] = useState<boolean>(false);
  const [recipientCopy, setRecipientCopy] = useState<boolean>(false);
  const [purposeCopy, setPurposeCopy] = useState<boolean>(false);

  const {
    iban: { title: ibanTitle, value: ibanValue },
    edrpou: { title: edrpouTitle, value: edrpouValue },
    purpose: { title: purposeTitle, value: purposeValue },
    recipient: { title: recipientTitle, value: recipientValue },
  } = paymentDetails;

  const onSuccessIbanCopy = () => {
    setIbanCopy(true);
    setEdrpouCopy(false);
    setRecipientCopy(false);
    setPurposeCopy(false);
  };

  const onSuccessEdrpouCopy = () => {
    setEdrpouCopy(true);
    setIbanCopy(false);
    setRecipientCopy(false);
    setPurposeCopy(false);
  };

  const onSuccessRecipientCopy = () => {
    setRecipientCopy(true);
    setIbanCopy(false);
    setEdrpouCopy(false);
    setPurposeCopy(false);
  };

  const onSuccessPurposeCopy = () => {
    setPurposeCopy(true);
    setIbanCopy(false);
    setEdrpouCopy(false);
    setRecipientCopy(false);
  };

  const onCopyBtnClickFunc =
    ({
      data,
      onSuccessCallback,
      shouldReplaceSpaces = false,
    }: {
      data: string;
      onSuccessCallback: Func;
      shouldReplaceSpaces?: boolean;
    }) =>
    () => {
      let text = data;

      if (shouldReplaceSpaces) {
        text = data.replace(regExp.allSpaces, '');
      }

      copyToClipboard({ text, onSuccessCallback });
    };

  const onCopyIbanBtnClick = onCopyBtnClickFunc({
    data: ibanValue,
    onSuccessCallback: onSuccessIbanCopy,
    shouldReplaceSpaces: true,
  });

  const onCopyEdrpouBtnClick = onCopyBtnClickFunc({
    data: edrpouValue,
    onSuccessCallback: onSuccessEdrpouCopy,
  });

  const onCopyRecipientBtnClick = onCopyBtnClickFunc({
    data: recipientValue,
    onSuccessCallback: onSuccessRecipientCopy,
  });

  const onCopyPurposeBtnClick = onCopyBtnClickFunc({
    data: purposeValue,
    onSuccessCallback: onSuccessPurposeCopy,
  });

  return (
    <List>
      <ListItem>
        <DonationSectionPaymentDetailsItem
          title={ibanTitle}
          value={ibanValue}
          copySuccess={ibanCopy}
          onCopyBtnClick={onCopyIbanBtnClick}
        />
      </ListItem>
      <ListItem>
        <DonationSectionPaymentDetailsItem
          title={edrpouTitle}
          value={edrpouValue}
          copySuccess={edrpouCopy}
          onCopyBtnClick={onCopyEdrpouBtnClick}
        />
      </ListItem>
      <ListItem>
        <DonationSectionPaymentDetailsItem
          title={recipientTitle}
          value={recipientValue}
          copySuccess={recipientCopy}
          onCopyBtnClick={onCopyRecipientBtnClick}
        />
      </ListItem>
      <ListItem>
        <DonationSectionPaymentDetailsItem
          title={purposeTitle}
          value={purposeValue}
          copySuccess={purposeCopy}
          onCopyBtnClick={onCopyPurposeBtnClick}
        />
      </ListItem>
    </List>
  );
};

export default DonationSectionPaymentDetailsList;
