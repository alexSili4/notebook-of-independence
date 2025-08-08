import { FC } from 'react';
import {
  Answer,
  Text,
} from './QuizSectionModalWinFifthQuestionVariantAnswer.styled';
import { IProps } from './QuizSectionModalWinFifthQuestionVariantAnswer.types';

const QuizSectionModalWinFifthQuestionVariantAnswer: FC<IProps> = ({
  text,
  isBlueBg = false,
}) => {
  return (
    <Answer isBlueBg={isBlueBg}>
      <Text>{text}</Text>
    </Answer>
  );
};

export default QuizSectionModalWinFifthQuestionVariantAnswer;
