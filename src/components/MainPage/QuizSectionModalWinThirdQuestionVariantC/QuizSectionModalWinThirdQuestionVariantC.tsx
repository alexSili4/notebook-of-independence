import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinThirdQuestionVariantC.types';
import { Container } from './QuizSectionModalWinThirdQuestionVariantC.styled';
import QuizSectionModalWinThirdQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinThirdQuestionVariantAnswer';

const QuizSectionModalWinThirdQuestionVariantC: FC<IProps> = ({
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
        <QuizSectionModalWinThirdQuestionVariantAnswer text={text} />
      </QuizSectionModalWinQuestionRadioBtn>
    </Container>
  );
};

export default QuizSectionModalWinThirdQuestionVariantC;
