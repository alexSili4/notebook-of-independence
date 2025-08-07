import { FC } from 'react';
import {
  ContainerDesk,
  ContainerMob,
} from './BuyNotebookSectionInfoDelivery.styled';
import BuyNotebookSectionInfoDeliveryContent from '@MainPageComponents/BuyNotebookSectionInfoDeliveryContent';

const BuyNotebookSectionInfoDelivery: FC = () => {
  return (
    <>
      <ContainerMob>
        <BuyNotebookSectionInfoDeliveryContent />
      </ContainerMob>
      <ContainerDesk>
        <BuyNotebookSectionInfoDeliveryContent />
      </ContainerDesk>
    </>
  );
};

export default BuyNotebookSectionInfoDelivery;
