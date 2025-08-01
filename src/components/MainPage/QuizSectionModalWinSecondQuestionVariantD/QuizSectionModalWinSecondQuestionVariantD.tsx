import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinSecondQuestionVariantD.types';
import { Container } from './QuizSectionModalWinSecondQuestionVariantD.styled';
import QuizSectionModalWinSecondQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinSecondQuestionVariantAnswer';

const QuizSectionModalWinSecondQuestionVariantD: FC<IProps> = ({
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
        <QuizSectionModalWinSecondQuestionVariantAnswer text={text} isBlueBg />
      </QuizSectionModalWinQuestionRadioBtn>
    </Container>
  );
};

export default QuizSectionModalWinSecondQuestionVariantD;
