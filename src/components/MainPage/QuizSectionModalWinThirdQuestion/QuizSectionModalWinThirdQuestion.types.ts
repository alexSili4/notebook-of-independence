import { GoToNextQuestionFunc } from '@/types/functions.types';
import { IQuestionDetails } from '@/types/questions.types';

export interface IProps {
  question: IQuestionDetails;
  index: number;
  goToNextQuestion: GoToNextQuestionFunc;
}
