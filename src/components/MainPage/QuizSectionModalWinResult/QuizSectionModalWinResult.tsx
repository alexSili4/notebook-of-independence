import { FC } from 'react';
import {
  Container,
  Content,
  BackgroundImg,
} from './QuizSectionModalWinResult.styled';
import QuizSectionModalWinResultText from '@MainPageComponents/QuizSectionModalWinResultText';
import resultBg from '@/images/quiz/questions/result-bg.png';

const QuizSectionModalWinResult: FC = () => {
  return (
    <Container>
      <BackgroundImg src={resultBg} alt='' />
      <Content>
        <QuizSectionModalWinResultText />
        {/* <ShareResultWrap></ShareResultWrap> */}
      </Content>
    </Container>
  );
};

export default QuizSectionModalWinResult;
