import { GoToNextQuestionFunc } from '@/types/functions.types';
import { IQuestionDetails } from '@/types/questions.types';

export interface IProps {
  question: IQuestionDetails;
  index: number;
  goToNextQuestion: GoToNextQuestionFunc;
  inView: boolean;
  nextQuestionInView: boolean;
  animationDuration: number;
  animationBounce: number;
}
