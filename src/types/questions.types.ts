export interface IQuestionDetailsVariantDetails {
  text: string;
  isCorrectAnswer: boolean;
}

export type QuestionDetailsVariants = IQuestionDetailsVariantDetails[];

export interface IQuestionDetails {
  question: string;
  variants: QuestionDetailsVariants;
}

export interface IQuestions {
  [key: number]: IQuestionDetails;
}
