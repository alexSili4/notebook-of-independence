import { FC } from 'react';
import {
  Container,
  DecorativeAccentIcon,
  Desc,
  DescPart,
  DescWrap,
  Title,
  Content,
} from './NewHistorySectionText.styled';
import BuyNotebookLink from '@MainPageComponents/BuyNotebookLink';

const NewHistorySectionText: FC = () => {
  return (
    <Container>
      <Title>Пиши історію далі</Title>
      <Content>
        <DescWrap>
          <Desc>
            <DescPart>
              «Сільпо» разом із родиною Левка Лук’яненка представляють «Зошит
              Незалежності».{' '}
            </DescPart>
            <DescPart>
              Саме в такому зошиті — простому учнівському — Левко Лукʼяненко
              написав чернетку Акта проголошення незалежності України.
            </DescPart>
            <DescPart isDisplayBlock>
              Ми відтворили його. Але тепер — щоб у ньому писали ви. Конспекти.
              Рішення. Думки. Вірші. Формули. Мрії. А одного дня, можливо, й
              дуже важливий текст.
            </DescPart>
          </Desc>
          <DecorativeAccentIcon />
        </DescWrap>
        <BuyNotebookLink />
      </Content>
    </Container>
  );
};

export default NewHistorySectionText;
