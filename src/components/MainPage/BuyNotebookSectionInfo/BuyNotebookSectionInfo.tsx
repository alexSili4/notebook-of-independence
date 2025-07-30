import { FC } from 'react';
import {
  Text,
  TextWrap,
  Title,
  TitleWrap,
  Container,
  AccentIcon,
  Content,
  Price,
  Info,
  DescWrap,
  Desc,
  DeliveryIcon,
  DescText,
  PackageIcon,
  BuyInfo,
  BuyLink,
  BuyDesc,
} from './BuyNotebookSectionInfo.styled';
import { ExternalLinks } from '@/constants';

const BuyNotebookSectionInfo: FC = () => {
  return (
    <Container>
      <Content>
        <TitleWrap>
          <Title>ЗОШИТ НЕЗАЛЕЖНОСТІ</Title>
          <TextWrap>
            <Text>
              Це — точна копія зошита, в якому Левко Лукʼяненко написав чернетку
              Акта проголошення Незалежності. Увесь прибуток від продажу йде на
              підтримку родин захисників — Азов.Супровід.
            </Text>
            <AccentIcon />
          </TextWrap>
        </TitleWrap>
        <Price>50 грн</Price>
      </Content>
      <Info>
        <DescWrap>
          <Desc>
            <DeliveryIcon />
            <DescText>
              Доставка по всій Україні: Новою поштою та Укрпоштою Термін
              доставки: 2–5 робочих днів після підтвердження оплати
            </DescText>
          </Desc>
          <Desc>
            <PackageIcon />
            <DescText>
              Упаковка: зошит надходить у фірмовому крафтовому конверті,
              захищеному від вологи
            </DescText>
          </Desc>
        </DescWrap>
        <BuyInfo>
          <BuyLink
            href={ExternalLinks.buyNotebook}
            target='_blank'
            rel='noopener noreferrer'
          >
            Замовити НА SILPO.UA
          </BuyLink>
          <BuyDesc>100% прибутку НА Азов.Супровід</BuyDesc>
        </BuyInfo>
      </Info>
    </Container>
  );
};

export default BuyNotebookSectionInfo;
