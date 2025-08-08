import { FC } from 'react';
import QuizSectionModalWinThirdQuestionVariantA from '@MainPageComponents/QuizSectionModalWinThirdQuestionVariantA';
import QuizSectionModalWinThirdQuestionVariantB from '@MainPageComponents/QuizSectionModalWinThirdQuestionVariantB';
import QuizSectionModalWinThirdQuestionVariantC from '@MainPageComponents/QuizSectionModalWinThirdQuestionVariantC';
import QuizSectionModalWinThirdQuestionVariantD from '@/components/MainPage/QuizSectionModalWinThirdQuestionVariantD';
import {
  List,
  Container,
  ListItem,
} from './QuizSectionModalWinThirdQuestionAnswers.styled';
import { IProps } from './QuizSectionModalWinThirdQuestionAnswers.types';

const QuizSectionModalWinThirdQuestionAnswers: FC<IProps> = ({
  variants,
  onAnswerChange,
  currentAnswer,
}) => {
  return (
    <Container>
      <List>
        <ListItem>
          <QuizSectionModalWinThirdQuestionVariantA
            variant={variants[0]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinThirdQuestionVariantB
            variant={variants[1]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinThirdQuestionVariantC
            variant={variants[2]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinThirdQuestionVariantD
            variant={variants[3]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default QuizSectionModalWinThirdQuestionAnswers;
