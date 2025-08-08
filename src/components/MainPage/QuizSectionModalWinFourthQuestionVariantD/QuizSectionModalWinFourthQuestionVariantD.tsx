import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinFourthQuestionVariantD.types';
import { Container } from './QuizSectionModalWinFourthQuestionVariantD.styled';
import QuizSectionModalWinFourthQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinFourthQuestionVariantAnswer';

const QuizSectionModalWinFourthQuestionVariantD: FC<IProps> = ({
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

export default QuizSectionModalWinFourthQuestionVariantD;
