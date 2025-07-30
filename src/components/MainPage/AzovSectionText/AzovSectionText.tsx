import { FC } from 'react';
import {
  Container,
  Content,
  Desc,
  Text,
  TextWrap,
} from './AzovSectionText.styled';
import AnimatedAzovSectionTextQuote from '@AnimatedMainPageComponents/AnimatedAzovSectionTextQuote';
import { IProps } from './AzovSectionText.types';

const AzovSectionText: FC<IProps> = ({ animationDuration, inView }) => {
  return (
    <Container>
      <Content>
        <AnimatedAzovSectionTextQuote
          animationDuration={animationDuration}
          inView={inView}
        />
        <TextWrap>
          <Text>
            Я ріс в атмосфері інтелектуального спротиву імперському абсурду.
            Мого батька, як і Левка Лукʼяненка, називали постраждалим від
            радянського режиму. Але хіба воїн, який першим іде в бій проти зла,
            — це постраждалий? Це людина, яка обирає свободу, навіть якщо ціною
            є ув’язнення. Такою була доля мого батька і багатьох дисидентів того
            часу, які боролися за те, щоб сьогодні ми жили в країні, яка
            самостійно визначає свою долю
          </Text>
          <Desc>Оксен Лісовий, міністр освіти і науки України</Desc>
        </TextWrap>
      </Content>
    </Container>
  );
};

export default AzovSectionText;
