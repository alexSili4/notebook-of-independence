import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinFirstQuestionVariantB.types';
import { Container } from './QuizSectionModalWinFirstQuestionVariantB.styled';
import QuizSectionModalWinFirstQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinFirstQuestionVariantAnswer';
import kravchuk from '@/images/quiz/questions/kravchuk.png';

const QuizSectionModalWinFirstQuestionVariantB: FC<IProps> = ({
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
          photo={kravchuk}
          text={text}
          isBlueBg
        />
      </QuizSectionModalWinQuestionRadioBtn>
    </Container>
  );
};

export default QuizSectionModalWinFirstQuestionVariantB;
