import { FC, useEffect, useRef, useState } from 'react';
import { Container, Content, Background } from './QuizSectionModalWin.styled';
import QuizSectionModalWinControls from '@MainPageComponents/QuizSectionModalWinControls';
import QuizSectionModalWinProgress from '@MainPageComponents/QuizSectionModalWinProgress';
import QuizSectionModalWinQuestions from '@MainPageComponents/QuizSectionModalWinQuestions';
import { IProps } from './QuizSectionModalWin.types';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const QuizSectionModalWin: FC<IProps> = ({ onCloseModalWinBtnClick }) => {
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(5);
  const [totalScore, setTotalScore] = useState<number>(0);
  const questionsRef = useRef<HTMLDivElement>(null);

  const isFirstQuestion = currentQuestion === 1;
  const progress = (100 / totalQuestions) * currentQuestion;
  const currentQuestionValue = currentQuestion.toString().padStart(2, '0');
  const totalQuestionsValue = totalQuestions.toString().padStart(2, '0');

  const decrementCurrentQuestion = () => {
    setCurrentQuestion((prevState) => (prevState -= 1));
  };

  const incrementCurrentQuestion = () => {
    setCurrentQuestion((prevState) => (prevState -= 1));
  };

  const incrementTotalScore = () => {
    setTotalScore((prevState) => (prevState -= 1));
  };

  const onGoBackBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    decrementCurrentQuestion();
  };

  useEffect(() => {
    const questions = questionsRef.current;

    if (questions) {
      const totalQuestions = questions.children.length;

      setTotalQuestions(totalQuestions);
    }
  }, []);

  return (
    <Container>
      <Background>
        {/* <QuizSectionModalWinControls
          disabledGoBackBtn={isFirstQuestion}
          onCloseModalWinBtnClick={onCloseModalWinBtnClick}
          onGoBackBtnClick={onGoBackBtnClick}
        />
        <QuizSectionModalWinProgress
          progress={progress}
          currentQuestion={currentQuestionValue}
          totalQuestions={totalQuestionsValue}
        /> */}
        <QuizSectionModalWinQuestions
          containerRef={questionsRef}
          incrementCurrentQuestion={incrementCurrentQuestion}
          incrementTotalScore={incrementTotalScore}
        />
      </Background>
    </Container>
  );
};

export default QuizSectionModalWin;
