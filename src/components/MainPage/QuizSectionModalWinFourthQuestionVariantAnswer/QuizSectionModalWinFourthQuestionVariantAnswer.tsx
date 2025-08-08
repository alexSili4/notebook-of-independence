import { FC } from 'react';
import {
  Answer,
  Text,
} from './QuizSectionModalWinFourthQuestionVariantAnswer.styled';
import { IProps } from './QuizSectionModalWinFourthQuestionVariantAnswer.types';

const QuizSectionModalWinFourthQuestionVariantAnswer: FC<IProps> = ({
  text,
  isBlueBg = false,
}) => {
  return (
    <Answer isBlueBg={isBlueBg}>
      <Text>{text}</Text>
    </Answer>
  );
};

export default QuizSectionModalWinFourthQuestionVariantAnswer;
