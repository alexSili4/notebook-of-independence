import { FC, useState } from 'react';
import { Container, Content } from './QuizSectionModalWinFirstQuestion.styled';
import QuizSectionModalWinQuestionTitle from '@MainPageComponents/QuizSectionModalWinQuestionTitle';
import { IProps } from './QuizSectionModalWinFirstQuestion.types';
import { InputChangeEvent, StringOrNull } from '@/types/types';
import QuizSectionModalWinFirstQuestionAnswers from '@MainPageComponents/QuizSectionModalWinFirstQuestionAnswers';
import { makeBlur } from '@/utils';

const QuizSectionModalWinFirstQuestion: FC<IProps> = ({
  question: { question, variants },
  incrementTotalScore,
  incrementCurrentQuestion,
}) => {
  const [currentAnswer, setCurrentAnswer] = useState<StringOrNull>(null);

  const correctAnswer = variants.find(({ isCorrectAnswer }) => isCorrectAnswer);
  const isCorrectAnswer = currentAnswer === correctAnswer?.text;

  const onAnswerChange = (e: InputChangeEvent) => {
    const { value } = e.currentTarget;

    makeBlur(e.currentTarget);
    setCurrentAnswer(value);
  };

  const onNextBtnClick = () => {
    if (isCorrectAnswer) {
      incrementTotalScore();
    }

    incrementCurrentQuestion();
  };

  return (
    <Container>
      <Content>
        <QuizSectionModalWinQuestionTitle title={question} />
        <QuizSectionModalWinFirstQuestionAnswers
          currentAnswer={currentAnswer}
          onAnswerChange={onAnswerChange}
          variants={variants}
        />
      </Content>
    </Container>
  );
};

export default QuizSectionModalWinFirstQuestion;
