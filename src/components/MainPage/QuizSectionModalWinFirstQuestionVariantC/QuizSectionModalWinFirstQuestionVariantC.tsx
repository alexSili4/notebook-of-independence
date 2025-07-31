import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinFirstQuestionVariantC.types';
import { Container } from './QuizSectionModalWinFirstQuestionVariantC.styled';
import lukyanenko from '@/images/quiz/questions/lukyanenko.png';
import QuizSectionModalWinFirstQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinFirstQuestionVariantAnswer';

const QuizSectionModalWinFirstQuestionVariantC: FC<IProps> = ({
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
        <QuizSectionModalWinFirstQuestionVariantAnswer
          photo={lukyanenko}
          text={text}
        />
      </QuizSectionModalWinQuestionRadioBtn>
    </Container>
  );
};

export default QuizSectionModalWinFirstQuestionVariantC;
