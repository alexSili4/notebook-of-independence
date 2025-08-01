import { FC } from 'react';
import QuizSectionModalWinResult from '@MainPageComponents/QuizSectionModalWinResult';
import { Container, Element } from './AnimatedQuizSectionModalWinResult.styled';

const AnimatedQuizSectionModalWinResult: FC = () => {
  return (
    <Container>
      <Element>
        <QuizSectionModalWinResult />
      </Element>
    </Container>
  );
};

export default AnimatedQuizSectionModalWinResult;
