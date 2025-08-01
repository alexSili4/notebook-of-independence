import { Func } from '@/types/functions.types';
import { IQuestions } from '@/types/questions.types';

export interface IProps {
  onCloseModalWinBtnClick: Func;
  questions: IQuestions;
}
