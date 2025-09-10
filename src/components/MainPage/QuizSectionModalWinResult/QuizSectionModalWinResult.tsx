import { FC } from 'react';
import {
  Container,
  Content,
  BackgroundImg,
} from './QuizSectionModalWinResult.styled';
import QuizSectionModalWinResultText from '@MainPageComponents/QuizSectionModalWinResultText';
import QuizSectionModalWinResultShare from '@MainPageComponents/QuizSectionModalWinResultShare';
import resultBg from '@/images/quiz/questions/result-bg-min.png';
import { IProps } from './QuizSectionModalWinResult.types';
import QuizSectionModalWinResultShareBtn from '@MainPageComponents/QuizSectionModalWinResultShareBtn';

const QuizSectionModalWinResult: FC<IProps> = ({
  totalQuestions,
  totalScore,
  characteristic,
}) => {
  return (
    <Container>
      <BackgroundImg
        src={resultBg}
        alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 75'
      />
      <Content>
        <QuizSectionModalWinResultText
          totalQuestions={totalQuestions}
          totalScore={totalScore}
          characteristic={characteristic}
        />
        <QuizSectionModalWinResultShare />
        <QuizSectionModalWinResultShareBtn isHidden />
      </Content>
    </Container>
  );
};

export default QuizSectionModalWinResult;
