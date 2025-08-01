import { FC } from 'react';
import {
  Answer,
  Text,
} from './QuizSectionModalWinSecondQuestionVariantAnswer.styled';
import { IProps } from './QuizSectionModalWinSecondQuestionVariantAnswer.types';

const QuizSectionModalWinSecondQuestionVariantAnswer: FC<IProps> = ({
  text,
  isBlueBg = false,
}) => {
  return (
    <Answer isBlueBg={isBlueBg}>
      <Text>{text}</Text>
    </Answer>
  );
};

export default QuizSectionModalWinSecondQuestionVariantAnswer;
