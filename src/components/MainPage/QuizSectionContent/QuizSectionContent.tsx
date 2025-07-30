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
        <Title>левко кидає тобі виклик!</Title>
        <Text>
          Всього 5 запитань про нашу незалежність. Згадай цікаві факти, дізнайся
          нове й перевір, наскільки добре ти знаєш історію. А потім — покажи
          друзям, хто тут справжній знавець
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
