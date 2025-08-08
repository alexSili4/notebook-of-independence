import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinFifthQuestionVariantC.types';
import { Container } from './QuizSectionModalWinFifthQuestionVariantC.styled';
import QuizSectionModalWinFifthQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinFifthQuestionVariantAnswer';

const QuizSectionModalWinFifthQuestionVariantC: FC<IProps> = ({
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
        <QuizSectionModalWinFifthQuestionVariantAnswer text={text} />
      </QuizSectionModalWinQuestionRadioBtn>
    </Container>
  );
};

export default QuizSectionModalWinFifthQuestionVariantC;
