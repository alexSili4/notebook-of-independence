import { OnInputChangeFunc } from '@/types/functions.types';
import { QuestionDetailsVariants } from '@/types/questions.types';
import { StringOrNull } from '@/types/types';

export interface IProps {
  variants: QuestionDetailsVariants;
  onAnswerChange: OnInputChangeFunc;
  currentAnswer: StringOrNull;
}
