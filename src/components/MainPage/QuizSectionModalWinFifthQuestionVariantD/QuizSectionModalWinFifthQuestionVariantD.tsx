import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinFifthQuestionVariantD.types';
import { Container } from './QuizSectionModalWinFifthQuestionVariantD.styled';
import QuizSectionModalWinFifthQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinFifthQuestionVariantAnswer';

const QuizSectionModalWinFifthQuestionVariantD: FC<IProps> = ({
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

export default QuizSectionModalWinFifthQuestionVariantD;
