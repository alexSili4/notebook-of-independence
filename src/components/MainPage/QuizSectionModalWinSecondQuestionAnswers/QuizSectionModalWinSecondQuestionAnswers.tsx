import { FC } from 'react';
import QuizSectionModalWinSecondQuestionVariantA from '@MainPageComponents/QuizSectionModalWinSecondQuestionVariantA';
import QuizSectionModalWinSecondQuestionVariantB from '@MainPageComponents/QuizSectionModalWinSecondQuestionVariantB';
import QuizSectionModalWinSecondQuestionVariantC from '@MainPageComponents/QuizSectionModalWinSecondQuestionVariantC';
import QuizSectionModalWinSecondQuestionVariantD from '@/components/MainPage/QuizSectionModalWinSecondQuestionVariantD';
import {
  List,
  Container,
  ListItem,
} from './QuizSectionModalWinSecondQuestionAnswers.styled';
import { IProps } from './QuizSectionModalWinSecondQuestionAnswers.types';

const QuizSectionModalWinSecondQuestionAnswers: FC<IProps> = ({
  variants,
  onAnswerChange,
  currentAnswer,
}) => {
  return (
    <Container>
      <List>
        <ListItem>
          <QuizSectionModalWinSecondQuestionVariantA
            variant={variants[0]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinSecondQuestionVariantB
            variant={variants[1]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinSecondQuestionVariantC
            variant={variants[2]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinSecondQuestionVariantD
            variant={variants[3]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default QuizSectionModalWinSecondQuestionAnswers;
