import { FC } from 'react';
import {
  Text,
  TextWrap,
  Title,
  TitleWrap,
  Container,
  AccentIconDesk,
  AccentIconMob,
  Content,
  Price,
  Info,
  BuyInfo,
  BuyLink,
  BuyDesc,
} from './BuyNotebookSectionInfo.styled';
import { ExternalLinks } from '@/constants';
import BuyNotebookSectionInfoDelivery from '@MainPageComponents/BuyNotebookSectionInfoDelivery';

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
            <AccentIconMob />
            <AccentIconDesk />
          </TextWrap>
        </TitleWrap>
        <Price>50 грн</Price>
      </Content>
      <Info>
        <BuyNotebookSectionInfoDelivery />
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
