import { FC, useState } from 'react';
import { Container, Content } from './QuizSectionModalWinFourthQuestion.styled';
import QuizSectionModalWinQuestionTitle from '@MainPageComponents/QuizSectionModalWinQuestionTitle';
import { IProps } from './QuizSectionModalWinFourthQuestion.types';
import { BtnClickEvent, InputChangeEvent, StringOrNull } from '@/types/types';
import QuizSectionModalWinFourthQuestionAnswers from '@MainPageComponents/QuizSectionModalWinFourthQuestionAnswers';
import { makeBlur } from '@/utils';
import QuizSectionModalWinQuestionsNextBtn from '@MainPageComponents/QuizSectionModalWinQuestionsNextBtn';

const QuizSectionModalWinFourthQuestion: FC<IProps> = ({
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
        <QuizSectionModalWinFourthQuestionAnswers
          currentAnswer={currentAnswer}
          onAnswerChange={onAnswerChange}
          variants={variants}
        />
      </Content>
      <QuizSectionModalWinQuestionsNextBtn onNextBtnClick={onNextBtnClick} />
    </Container>
  );
};

export default QuizSectionModalWinFourthQuestion;
