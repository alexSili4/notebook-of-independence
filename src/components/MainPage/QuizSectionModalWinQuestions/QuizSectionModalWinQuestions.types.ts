import { GoToNextQuestionFunc } from '@/types/functions.types';
import { IQuestions } from '@/types/questions.types';

export interface IProps {
  goToNextQuestion: GoToNextQuestionFunc;
  questions: IQuestions;
  animationBounce: number;
  animationDuration: number;
  firstQuestionInView: boolean;
  secondQuestionInView: boolean;
  thirdQuestionInView: boolean;
}
