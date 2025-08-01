import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinSecondQuestionVariantB.types';
import { Container } from './QuizSectionModalWinSecondQuestionVariantB.styled';
import QuizSectionModalWinSecondQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinSecondQuestionVariantAnswer';

const QuizSectionModalWinSecondQuestionVariantB: FC<IProps> = ({
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

export default QuizSectionModalWinSecondQuestionVariantB;
