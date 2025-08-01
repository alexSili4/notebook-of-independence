import { FC } from 'react';
import {
  Button,
  AccentIcon,
  Title,
} from './QuizSectionModalWinQuestionsNextBtn.styled';
import { IProps } from './QuizSectionModalWinQuestionsNextBtn.types';

const QuizSectionModalWinQuestionsNextBtn: FC<IProps> = ({
  onNextBtnClick,
}) => {
  return (
    <Button type='button' onClick={onNextBtnClick}>
      <Title>далі</Title>
      <AccentIcon />
    </Button>
  );
};

export default QuizSectionModalWinQuestionsNextBtn;
