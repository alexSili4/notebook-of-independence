import { Func } from '@/types/functions.types';
import { IQuestions } from '@/types/questions.types';

export interface IProps {
  setModalWinState: Func;
  questions: IQuestions;
}
