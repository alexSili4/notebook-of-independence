import { FC } from 'react';
import {
  Container,
  Content,
  IconWrap,
  Image,
  ImgWrap,
  Label,
  Link,
  TelegramIcon,
  Title,
} from './BuyNotebookSectionQR.styled';
import qr from '@/images/buyNotebook/qr.jpg';
import { ExternalLinks } from '@/constants';

const BuyNotebookSectionQR: FC = () => {
  return (
    <Container>
      <Content>
        <Title>Інформація для B2B замовлень</Title>
        <Link
          href={ExternalLinks.silpoBot}
          target='_blank'
          rel='noopener noreferrer'
        >
          <IconWrap>
            <TelegramIcon />
          </IconWrap>
          <Label>@SilpoB2Bbot</Label>
        </Link>
      </Content>
      <ImgWrap>
        <Image src={qr} alt='' />
      </ImgWrap>
    </Container>
  );
};

export default BuyNotebookSectionQR;
