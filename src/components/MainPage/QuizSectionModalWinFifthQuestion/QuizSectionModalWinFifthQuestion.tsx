import { FC, useState } from 'react';
import { Container, Content } from './QuizSectionModalWinFifthQuestion.styled';
import QuizSectionModalWinQuestionTitle from '@MainPageComponents/QuizSectionModalWinQuestionTitle';
import { IProps } from './QuizSectionModalWinFifthQuestion.types';
import { BtnClickEvent, InputChangeEvent, StringOrNull } from '@/types/types';
import QuizSectionModalWinFifthQuestionAnswers from '@MainPageComponents/QuizSectionModalWinFifthQuestionAnswers';
import { makeBlur } from '@/utils';
import QuizSectionModalWinQuestionsNextBtn from '@MainPageComponents/QuizSectionModalWinQuestionsNextBtn';

const QuizSectionModalWinFifthQuestion: FC<IProps> = ({
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
        <QuizSectionModalWinFifthQuestionAnswers
          currentAnswer={currentAnswer}
          onAnswerChange={onAnswerChange}
          variants={variants}
        />
      </Content>
      <QuizSectionModalWinQuestionsNextBtn onNextBtnClick={onNextBtnClick} />
    </Container>
  );
};

export default QuizSectionModalWinFifthQuestion;
