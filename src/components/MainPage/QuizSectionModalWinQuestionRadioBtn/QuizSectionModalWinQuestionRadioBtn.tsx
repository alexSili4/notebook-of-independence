import { FC } from 'react';
import { IProps } from './QuizSectionModalWinQuestionRadioBtn.types';
import {
  Container,
  Input,
  CheckImg,
  CheckWrap,
} from './QuizSectionModalWinQuestionRadioBtn.styled';
import check from '@/images/quiz/check.png';

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
        <CheckImg src={check} alt='' />
      </CheckWrap>
      {children}
    </Container>
  );
};

export default QuizSectionModalWinQuestionRadioBtn;
