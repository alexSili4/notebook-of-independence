import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinThirdQuestionVariantD.types';
import { Container } from './QuizSectionModalWinThirdQuestionVariantD.styled';
import QuizSectionModalWinThirdQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinThirdQuestionVariantAnswer';

const QuizSectionModalWinThirdQuestionVariantD: FC<IProps> = ({
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
        <QuizSectionModalWinThirdQuestionVariantAnswer text={text} isBlueBg />
      </QuizSectionModalWinQuestionRadioBtn>
    </Container>
  );
};

export default QuizSectionModalWinThirdQuestionVariantD;
