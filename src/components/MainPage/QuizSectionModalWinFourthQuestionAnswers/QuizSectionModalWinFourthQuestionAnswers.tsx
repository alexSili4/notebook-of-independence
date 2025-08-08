import { FC } from 'react';
import QuizSectionModalWinFourthQuestionVariantA from '@MainPageComponents/QuizSectionModalWinFourthQuestionVariantA';
import QuizSectionModalWinFourthQuestionVariantB from '@MainPageComponents/QuizSectionModalWinFourthQuestionVariantB';
import QuizSectionModalWinFourthQuestionVariantC from '@MainPageComponents/QuizSectionModalWinFourthQuestionVariantC';
import QuizSectionModalWinFourthQuestionVariantD from '@/components/MainPage/QuizSectionModalWinFourthQuestionVariantD';
import {
  List,
  Container,
  ListItem,
} from './QuizSectionModalWinFourthQuestionAnswers.styled';
import { IProps } from './QuizSectionModalWinFourthQuestionAnswers.types';

const QuizSectionModalWinFourthQuestionAnswers: FC<IProps> = ({
  variants,
  onAnswerChange,
  currentAnswer,
}) => {
  return (
    <Container>
      <List>
        <ListItem>
          <QuizSectionModalWinFourthQuestionVariantA
            variant={variants[0]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinFourthQuestionVariantB
            variant={variants[1]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinFourthQuestionVariantC
            variant={variants[2]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
        <ListItem>
          <QuizSectionModalWinFourthQuestionVariantD
            variant={variants[3]}
            onAnswerChange={onAnswerChange}
            currentAnswer={currentAnswer}
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default QuizSectionModalWinFourthQuestionAnswers;
