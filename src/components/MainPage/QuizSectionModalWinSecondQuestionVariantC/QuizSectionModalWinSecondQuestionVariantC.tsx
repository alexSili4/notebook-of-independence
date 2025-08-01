import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinSecondQuestionVariantC.types';
import { Container } from './QuizSectionModalWinSecondQuestionVariantC.styled';
import QuizSectionModalWinSecondQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinSecondQuestionVariantAnswer';

const QuizSectionModalWinSecondQuestionVariantC: FC<IProps> = ({
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

export default QuizSectionModalWinSecondQuestionVariantC;
