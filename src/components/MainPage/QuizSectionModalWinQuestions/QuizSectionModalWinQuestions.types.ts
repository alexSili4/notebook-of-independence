import { GoToNextQuestionFunc } from '@/types/functions.types';
import { IQuestionsData } from '@/types/questions.types';

export interface IProps {
  goToNextQuestion: GoToNextQuestionFunc;
  questions: IQuestionsData;
  animationBounce: number;
  animationDuration: number;
  firstQuestionInView: boolean;
  secondQuestionInView: boolean;
  thirdQuestionInView: boolean;
  fourthQuestionInView: boolean;
  fifthQuestionInView: boolean;
}
