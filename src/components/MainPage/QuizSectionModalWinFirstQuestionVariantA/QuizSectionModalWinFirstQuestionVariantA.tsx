import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinFirstQuestionVariantA.types';
import { Container } from './QuizSectionModalWinFirstQuestionVariantA.styled';
import chornovil from '@/images/quiz/questions/chornovil.png';
import QuizSectionModalWinFirstQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinFirstQuestionVariantAnswer';

const QuizSectionModalWinFirstQuestionVariantA: FC<IProps> = ({
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
          photo={chornovil}
          text={text}
        />
      </QuizSectionModalWinQuestionRadioBtn>
    </Container>
  );
};

export default QuizSectionModalWinFirstQuestionVariantA;
