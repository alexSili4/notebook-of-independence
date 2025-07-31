import { FC } from 'react';
import QuizSectionModalWinFirstQuestionVariantA from '@MainPageComponents/QuizSectionModalWinFirstQuestionVariantA';
import QuizSectionModalWinFirstQuestionVariantB from '@MainPageComponents/QuizSectionModalWinFirstQuestionVariantB';
import QuizSectionModalWinFirstQuestionVariantC from '@MainPageComponents/QuizSectionModalWinFirstQuestionVariantC';
import QuizSectionModalWinFirstQuestionVariantD from '@MainPageComponents/QuizSectionModalWinFirstQuestionVariantD';
import {
  List,
  Container,
  ListItem,
} from './QuizSectionModalWinFirstQuestionAnswers.styled';
import { IProps } from './QuizSectionModalWinFirstQuestionAnswers.types';

const QuizSectionModalWinFirstQuestionAnswers: FC<IProps> = ({
  variants,
  onAnswerChange,
  currentAnswer,
}) => {
  return (
    <Container>
      <List>
        <ListItem>
          <QuizSectionModalWinFirstQuestionVariantA
            variant={variants[0]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinFirstQuestionVariantB
            variant={variants[1]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinFirstQuestionVariantC
            variant={variants[2]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinFirstQuestionVariantD
            variant={variants[3]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default QuizSectionModalWinFirstQuestionAnswers;
