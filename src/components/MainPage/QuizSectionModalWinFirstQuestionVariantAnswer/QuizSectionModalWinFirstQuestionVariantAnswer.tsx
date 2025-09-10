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
      <Photo
        src={photo}
        alt='Зошит Незалежності – проєкт «Сільпо» спільно з родиною Левка Лук’яненка – Фото 69'
      />
      <Text>{text}</Text>
    </Answer>
  );
};

export default QuizSectionModalWinFirstQuestionVariantAnswer;
