import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinFourthQuestionVariantC.types';
import { Container } from './QuizSectionModalWinFourthQuestionVariantC.styled';
import QuizSectionModalWinFourthQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinFourthQuestionVariantAnswer';

const QuizSectionModalWinFourthQuestionVariantC: FC<IProps> = ({
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

export default QuizSectionModalWinFourthQuestionVariantC;
