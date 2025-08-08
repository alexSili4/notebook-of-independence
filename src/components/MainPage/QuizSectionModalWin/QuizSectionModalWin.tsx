import { FC, useEffect, useState } from 'react';
import { Container, Background } from './QuizSectionModalWin.styled';
import QuizSectionModalWinControls from '@MainPageComponents/QuizSectionModalWinControls';
import QuizSectionModalWinProgress from '@MainPageComponents/QuizSectionModalWinProgress';
import QuizSectionModalWinQuestions from '@MainPageComponents/QuizSectionModalWinQuestions';
import { IProps } from './QuizSectionModalWin.types';
import { Booleans, BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import {
  IGoToNextQuestionProps,
  IUpdateAnswersProps,
} from '@/types/functions.types';
import AnimatedQuizSectionModalWinResult from '@AnimatedMainPageComponents/AnimatedQuizSectionModalWinResult';

const QuizSectionModalWin: FC<IProps> = ({
  onCloseModalWinBtnClick,
  questions: { list: questions, characteristics },
}) => {
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [answers, setAnswers] = useState<Booleans>([]);
  const [showResult, setShowResult] = useState<boolean>(false);

  const totalScore = answers.filter((answer) => answer).length;

  const isFirstQuestion = currentQuestion === 1;
  const isLastQuestion = totalQuestions === currentQuestion;
  const firstQuestionInView = currentQuestion >= 1;
  const secondQuestionInView = currentQuestion >= 2;
  const thirdQuestionInView = currentQuestion >= 3;
  const fourthQuestionInView = currentQuestion >= 4;
  const fifthQuestionInView = currentQuestion >= 5;

  const progress = (100 / totalQuestions) * currentQuestion;
  const currentQuestionValue = currentQuestion.toString().padStart(2, '0');
  const totalQuestionsValue = totalQuestions.toString().padStart(2, '0');
  const characteristic = characteristics[totalScore];

  const updateAnswers = ({ index, isCorrectAnswer }: IUpdateAnswersProps) => {
    setAnswers((prevState) => {
      const items = [...prevState];
      items[index] = isCorrectAnswer;

      return items;
    });
  };

  const goToNextQuestion = ({
    index,
    isCorrectAnswer,
  }: IGoToNextQuestionProps) => {
    updateAnswers({ index, isCorrectAnswer });

    if (isLastQuestion) {
      setShowResult(true);
    } else {
      incrementCurrentQuestion();
    }
  };

  const decrementCurrentQuestion = () => {
    setCurrentQuestion((prevState) => (prevState -= 1));
  };

  const incrementCurrentQuestion = () => {
    setCurrentQuestion((prevState) => (prevState += 1));
  };

  const onGoBackBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    decrementCurrentQuestion();
  };

  useEffect(() => {
    const totalQuestions = Object.keys(questions).length;

    setTotalQuestions(totalQuestions);
  }, [questions]);

  return (
    <Container>
      <Background>
        <QuizSectionModalWinControls
          showResult={showResult}
          hiddenGoBackBtn={isFirstQuestion || showResult}
          onCloseModalWinBtnClick={onCloseModalWinBtnClick}
          onGoBackBtnClick={onGoBackBtnClick}
        />
        <QuizSectionModalWinProgress
          progress={progress}
          currentQuestion={currentQuestionValue}
          totalQuestions={totalQuestionsValue}
        />
        <QuizSectionModalWinQuestions
          goToNextQuestion={goToNextQuestion}
          questions={questions}
          animationBounce={0.2}
          animationDuration={4}
          firstQuestionInView={firstQuestionInView}
          secondQuestionInView={secondQuestionInView}
          thirdQuestionInView={thirdQuestionInView}
          fourthQuestionInView={fourthQuestionInView}
          fifthQuestionInView={fifthQuestionInView}
        />
        <AnimatedQuizSectionModalWinResult
          inView={showResult}
          totalQuestions={totalQuestions}
          totalScore={totalScore}
          characteristic={characteristic}
        />
      </Background>
    </Container>
  );
};

export default QuizSectionModalWin;
