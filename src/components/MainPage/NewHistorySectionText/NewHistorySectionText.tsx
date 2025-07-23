import { FC } from 'react';
import {
  Container,
  DecorativeAccentIcon,
  Desc,
  DescPart,
  DescWrap,
  Title,
} from './NewHistorySectionText.styled';

const NewHistorySectionText: FC = () => {
  return (
    <Container>
      <Title>Пиши історію далі</Title>
      <DescWrap>
        <Desc>
          <DescPart>
            «Сільпо» разом із родиною Левка Лук’яненка за підтримки Міністерства
            освіти і науки України представляють «Зошит незалежності».
          </DescPart>
          <DescPart>
            Саме в такому зошиті — простому учнівському — Левко Лукʼяненко
            написав чернетку Акта проголошення незалежності України.
          </DescPart>
          <DescPart>
            Ми відтворили його. Але тепер — щоб у ньому писали ви. Конспекти.
            Рішення. Думки. Вірші. Формули. Мрії. А одного дня, можливо, й дуже
            важливий текст.
          </DescPart>
        </Desc>
        <DecorativeAccentIcon />
      </DescWrap>
    </Container>
  );
};

export default NewHistorySectionText;
