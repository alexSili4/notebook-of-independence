import { FC } from 'react';
import { IProps } from './QuizSectionContent.types';
import {
  Container,
  AccentIcon,
  ShowQuizBtn,
  ShowQuizBtnWrap,
  Text,
  TextWrap,
  Title,
} from './QuizSectionContent.styled';

const QuizSectionContent: FC<IProps> = ({ onShowQuizBtnClick }) => {
  return (
    <Container>
      <TextWrap>
        <Title>Перевір свої знання про незалежність</Title>
        <Text>
          Всього 5 запитань про незалежність України. Згадай цікаві факти,
          дізнайся нове й перевір, наскільки добре ти знаєш історію. А потім
          покажи друзям, хто тут знавець.
        </Text>
      </TextWrap>
      <ShowQuizBtnWrap>
        <ShowQuizBtn type='button' onClick={onShowQuizBtnClick}>
          Прийняти виклик
        </ShowQuizBtn>
        <AccentIcon />
      </ShowQuizBtnWrap>
    </Container>
  );
};

export default QuizSectionContent;
