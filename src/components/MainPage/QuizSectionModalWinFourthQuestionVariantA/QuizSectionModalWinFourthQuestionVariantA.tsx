import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinFourthQuestionVariantA.types';
import { Container } from './QuizSectionModalWinFourthQuestionVariantA.styled';
import QuizSectionModalWinFourthQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinFourthQuestionVariantAnswer';

const QuizSectionModalWinFourthQuestionVariantA: FC<IProps> = ({
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
        <QuizSectionModalWinFourthQuestionVariantAnswer text={text} />
      </QuizSectionModalWinQuestionRadioBtn>
    </Container>
  );
};

export default QuizSectionModalWinFourthQuestionVariantA;
