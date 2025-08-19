import { FC } from 'react';
import {
  Container,
  DeliveryIcon,
  Desc,
  DescText,
  PackageIcon,
} from './BuyNotebookSectionInfoDeliveryContent.styled';

const BuyNotebookSectionInfoDeliveryContent: FC = () => {
  return (
    <Container>
      <Desc>
        <DeliveryIcon />
        <DescText>
          Доставка по всій Україні: Новою поштою
          <br />
          Термін доставки: 2–5 робочих днів після підтвердження оплати
        </DescText>
      </Desc>
      <Desc>
        <PackageIcon />
        <DescText>
          Упаковка: зошит надходить у фірмовому крафтовому конверті, захищеному
          від вологи
        </DescText>
      </Desc>
    </Container>
  );
};

export default BuyNotebookSectionInfoDeliveryContent;
