import { FC } from 'react';
import {
  Container,
  Content,
  BackgroundImg,
} from './QuizSectionModalWinResult.styled';
import QuizSectionModalWinResultText from '@MainPageComponents/QuizSectionModalWinResultText';
import QuizSectionModalWinResultShare from '@MainPageComponents/QuizSectionModalWinResultShare';
import resultBg from '@/images/quiz/questions/result-bg.png';
import { IProps } from './QuizSectionModalWinResult.types';

const QuizSectionModalWinResult: FC<IProps> = ({
  totalQuestions,
  totalScore,
  characteristic,
}) => {
  return (
    <Container>
      <BackgroundImg src={resultBg} alt='' />
      <Content>
        <QuizSectionModalWinResultText
          totalQuestions={totalQuestions}
          totalScore={totalScore}
          characteristic={characteristic}
        />
        <QuizSectionModalWinResultShare />
      </Content>
    </Container>
  );
};

export default QuizSectionModalWinResult;
