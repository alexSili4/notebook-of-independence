import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinSecondQuestionVariantA.types';
import { Container } from './QuizSectionModalWinSecondQuestionVariantA.styled';
import QuizSectionModalWinSecondQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinSecondQuestionVariantAnswer';

const QuizSectionModalWinSecondQuestionVariantA: FC<IProps> = ({
  variant: { text },
  onAnswerChange,
  currentAnswer,
}) => {
  const isChecked = text === currentAnswer;

  return (
    <Container>
      <QuizSectionModalWinQuestionRadioBtn
        onChange={onAnswerChange}
        isChecked={isChecked}
        value={text}
      >
        <QuizSectionModalWinSecondQuestionVariantAnswer text={text} />
      </QuizSectionModalWinQuestionRadioBtn>
    </Container>
  );
};

export default QuizSectionModalWinSecondQuestionVariantA;
