import { FC } from 'react';
import QuizSectionModalWinQuestionRadioBtn from '@MainPageComponents/QuizSectionModalWinQuestionRadioBtn';
import { IProps } from './QuizSectionModalWinFirstQuestionVariantD.types';
import { Container } from './QuizSectionModalWinFirstQuestionVariantD.styled';
import QuizSectionModalWinFirstQuestionVariantAnswer from '@MainPageComponents/QuizSectionModalWinFirstQuestionVariantAnswer';
import sandulyak from '@/images/quiz/questions/sandulyak-min.png';

const QuizSectionModalWinFirstQuestionVariantD: FC<IProps> = ({
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
          photo={sandulyak}
          text={text}
          isBlueBg
        />
      </QuizSectionModalWinQuestionRadioBtn>
    </Container>
  );
};

export default QuizSectionModalWinFirstQuestionVariantD;
