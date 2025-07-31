import { FC } from 'react';
import { IProps } from './QuizSectionModalWinQuestionTitle.types';
import { Title } from './QuizSectionModalWinQuestionTitle.styled';

const QuizSectionModalWinQuestionTitle: FC<IProps> = ({ title }) => {
  return <Title>{title}</Title>;
};

export default QuizSectionModalWinQuestionTitle;
