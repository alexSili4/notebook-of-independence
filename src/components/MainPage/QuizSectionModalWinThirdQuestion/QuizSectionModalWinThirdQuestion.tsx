import { FC, useState } from 'react';
import { Container, Content } from './QuizSectionModalWinThirdQuestion.styled';
import QuizSectionModalWinQuestionTitle from '@MainPageComponents/QuizSectionModalWinQuestionTitle';
import { IProps } from './QuizSectionModalWinThirdQuestion.types';
import { BtnClickEvent, InputChangeEvent, StringOrNull } from '@/types/types';
import QuizSectionModalWinThirdQuestionAnswers from '@MainPageComponents/QuizSectionModalWinThirdQuestionAnswers';
import { makeBlur } from '@/utils';
import QuizSectionModalWinQuestionsNextBtn from '@MainPageComponents/QuizSectionModalWinQuestionsNextBtn';

const QuizSectionModalWinThirdQuestion: FC<IProps> = ({
  question: { question, variants },
  goToNextQuestion,
  index,
}) => {
  const [currentAnswer, setCurrentAnswer] = useState<StringOrNull>(null);

  const correctAnswer = variants.find(({ isCorrectAnswer }) => isCorrectAnswer);
  const isCorrectAnswer = currentAnswer === correctAnswer?.text;

  const onAnswerChange = (e: InputChangeEvent) => {
    const { value } = e.currentTarget;

    makeBlur(e.currentTarget);
    setCurrentAnswer(value);
  };

  const onNextBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    goToNextQuestion({ index, isCorrectAnswer });
  };

  return (
    <Container>
      <Content>
        <QuizSectionModalWinQuestionTitle title={question} />
        <QuizSectionModalWinThirdQuestionAnswers
          currentAnswer={currentAnswer}
          onAnswerChange={onAnswerChange}
          variants={variants}
        />
      </Content>
      <QuizSectionModalWinQuestionsNextBtn onNextBtnClick={onNextBtnClick} />
    </Container>
  );
};

export default QuizSectionModalWinThirdQuestion;
