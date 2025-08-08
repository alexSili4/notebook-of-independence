import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinFifthQuestionVariantB.types';
import { Container } from './QuizSectionModalWinFifthQuestionVariantB.styled';
import QuizSectionModalWinFifthQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinFifthQuestionVariantAnswer';

const QuizSectionModalWinFifthQuestionVariantB: FC<IProps> = ({
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
        <QuizSectionModalWinFifthQuestionVariantAnswer text={text} isBlueBg />
      </QuizSectionModalWinQuestionRadioBtn>
    </Container>
  );
};

export default QuizSectionModalWinFifthQuestionVariantB;
