import { FC } from 'react';
import {
  Answer,
  Photo,
  Text,
} from './QuizSectionModalWinFirstQuestionVariantAnswer.styled';
import { IProps } from './QuizSectionModalWinFirstQuestionVariantAnswer.types';

const QuizSectionModalWinFirstQuestionVariantAnswer: FC<IProps> = ({
  photo,
  text,
  isBlueBg = false,
}) => {
  return (
    <Answer isBlueBg={isBlueBg}>
      <Photo src={photo} alt='' />
      <Text>{text}</Text>
    </Answer>
  );
};

export default QuizSectionModalWinFirstQuestionVariantAnswer;
