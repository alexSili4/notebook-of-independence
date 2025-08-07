import { FC } from 'react';
import BuyNotebookSectionInfoDeliveryContent from '@MainPageComponents/BuyNotebookSectionInfoDeliveryContent';
import BuyNotebookSectionInfoDeliveryAccordion from '@MainPageComponents/BuyNotebookSectionInfoDeliveryAccordion';
import { IProps } from './BuyNotebookSectionInfoDelivery.types';

const BuyNotebookSectionInfoDelivery: FC<IProps> = ({ isDesk }) => {
  return isDesk ? (
    <BuyNotebookSectionInfoDeliveryContent />
  ) : (
    <BuyNotebookSectionInfoDeliveryAccordion />
  );
};

export default BuyNotebookSectionInfoDelivery;
