import { FC } from 'react';
import { IProps } from './QuizSectionModalWinQuestionRadioBtn.types';
import {
  Container,
  Input,
  CheckImg,
  CheckWrap,
} from './QuizSectionModalWinQuestionRadioBtn.styled';
import check from '@/images/quiz/check-min.png';

const QuizSectionModalWinQuestionRadioBtn: FC<IProps> = ({
  onChange,
  children,
  isChecked,
  value,
}) => {
  return (
    <Container>
      <Input
        type='radio'
        value={value}
        onChange={onChange}
        checked={isChecked}
      />
      <CheckWrap>
        <CheckImg
          src={check}
          alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 70'
        />
      </CheckWrap>
      {children}
    </Container>
  );
};

export default QuizSectionModalWinQuestionRadioBtn;
