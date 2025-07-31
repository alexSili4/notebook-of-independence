import { Func } from '@/types/functions.types';
import { IQuestionDetails } from '@/types/questions.types';

export interface IProps {
  question: IQuestionDetails;
  incrementTotalScore: Func;
  incrementCurrentQuestion: Func;
}
