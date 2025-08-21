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
  BuyDesc,
} from './BuyNotebookSectionInfo.styled';
import BuyNotebookSectionInfoDelivery from '@MainPageComponents/BuyNotebookSectionInfoDelivery';
import { IProps } from './BuyNotebookSectionInfo.types';
import BuyNotebookSectionQR from '@MainPageComponents/BuyNotebookSectionQR';
import BuyNotebookLink from '@MainPageComponents/BuyNotebookLink';

const BuyNotebookSectionInfo: FC<IProps> = ({ isDesk }) => {
  return (
    <Container>
      <Content>
        <TitleWrap>
          <Title>ЗОШИТ НЕЗАЛЕЖНОСТІ</Title>
          <TextWrap>
            <Text>
              Ми відтворили легендарний зошит разом із палітуркою та чернеткою
              Акта проголошення незалежності України на другій сторінці. Все так
              само, як було 34 роки тому, тільки з чистими сторінками — для
              ваших ідей, конспектів і текстів, які, можливо, одного дня теж
              змінять долю країни. Наклад «Зошита Незалежності» обмежений і має
              благодійну мету: весь прибуток буде переданий ГО «Азов.Супровід»
              на підтримку звільнених із полону українських військових та їхніх
              родин.
            </Text>
            <AccentIconMob />
            <AccentIconDesk />
          </TextWrap>
        </TitleWrap>
        <Price>49,99 грн</Price>
      </Content>
      <Info>
        <BuyNotebookSectionInfoDelivery isDesk={isDesk} />
        <BuyInfo>
          <BuyNotebookLink />
          <BuyNotebookSectionQR />
          <BuyDesc>Весь прибуток НА "ГО «Азов.Супровід»"</BuyDesc>
        </BuyInfo>
      </Info>
    </Container>
  );
};

export default BuyNotebookSectionInfo;
