import { Strings } from './types';

export interface IQuestionDetailsVariantDetails {
  text: string;
  isCorrectAnswer: boolean;
}

export type QuestionDetailsVariants = IQuestionDetailsVariantDetails[];

export interface IQuestionDetails {
  question: string;
  variants: QuestionDetailsVariants;
}

export interface IQuestionsData {
  0: IQuestionDetails;
  1: IQuestionDetails;
  2: IQuestionDetails;
  3: IQuestionDetails;
  4: IQuestionDetails;
}

export interface IQuestions {
  list: IQuestionsData;
  characteristics: Strings;
}
