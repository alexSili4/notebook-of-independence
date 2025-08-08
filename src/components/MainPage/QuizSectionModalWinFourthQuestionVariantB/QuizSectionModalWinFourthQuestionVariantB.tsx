import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinFourthQuestionVariantB.types';
import { Container } from './QuizSectionModalWinFourthQuestionVariantB.styled';
import QuizSectionModalWinFourthQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinFourthQuestionVariantAnswer';

const QuizSectionModalWinFourthQuestionVariantB: FC<IProps> = ({
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
        <QuizSectionModalWinFourthQuestionVariantAnswer text={text} isBlueBg />
      </QuizSectionModalWinQuestionRadioBtn>
    </Container>
  );
};

export default QuizSectionModalWinFourthQuestionVariantB;
