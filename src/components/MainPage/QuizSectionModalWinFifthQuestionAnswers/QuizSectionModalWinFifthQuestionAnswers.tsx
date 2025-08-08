import { FC } from 'react';
import QuizSectionModalWinFifthQuestionVariantA from '@MainPageComponents/QuizSectionModalWinFifthQuestionVariantA';
import QuizSectionModalWinFifthQuestionVariantB from '@MainPageComponents/QuizSectionModalWinFifthQuestionVariantB';
import QuizSectionModalWinFifthQuestionVariantC from '@MainPageComponents/QuizSectionModalWinFifthQuestionVariantC';
import QuizSectionModalWinFifthQuestionVariantD from '@/components/MainPage/QuizSectionModalWinFifthQuestionVariantD';
import {
  List,
  Container,
  ListItem,
} from './QuizSectionModalWinFifthQuestionAnswers.styled';
import { IProps } from './QuizSectionModalWinFifthQuestionAnswers.types';

const QuizSectionModalWinFifthQuestionAnswers: FC<IProps> = ({
  variants,
  onAnswerChange,
  currentAnswer,
}) => {
  return (
    <Container>
      <List>
        <ListItem>
          <QuizSectionModalWinFifthQuestionVariantA
            variant={variants[0]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinFifthQuestionVariantB
            variant={variants[1]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinFifthQuestionVariantC
            variant={variants[2]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinFifthQuestionVariantD
            variant={variants[3]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default QuizSectionModalWinFifthQuestionAnswers;
