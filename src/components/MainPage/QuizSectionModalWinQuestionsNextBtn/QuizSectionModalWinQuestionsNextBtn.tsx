import { FC } from 'react';

const QuizSectionModalWinQuestionsNextBtn: FC = ({ onNextBtnClick }) => {
  return (
    <Button type='button' onClick={onNextBtnClick}>
      <Title>далі</Title>
      <AccentIcon />
    </Button>
  );
};

export default QuizSectionModalWinQuestionsNextBtn;
