import { OnInputChangeFunc } from '@/types/functions.types';
import { IQuestionDetailsVariantDetails } from '@/types/questions.types';
import { StringOrNull } from '@/types/types';

export interface IProps {
  currentAnswer: StringOrNull;
  variant: IQuestionDetailsVariantDetails;
  onAnswerChange: OnInputChangeFunc;
}
