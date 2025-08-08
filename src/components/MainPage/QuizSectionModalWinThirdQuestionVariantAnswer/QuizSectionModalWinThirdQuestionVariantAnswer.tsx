import { FC } from 'react';
import {
  Answer,
  Text,
} from './QuizSectionModalWinThirdQuestionVariantAnswer.styled';
import { IProps } from './QuizSectionModalWinThirdQuestionVariantAnswer.types';

const QuizSectionModalWinThirdQuestionVariantAnswer: FC<IProps> = ({
  text,
  isBlueBg = false,
}) => {
  return (
    <Answer isBlueBg={isBlueBg}>
      <Text>{text}</Text>
    </Answer>
  );
};

export default QuizSectionModalWinThirdQuestionVariantAnswer;
