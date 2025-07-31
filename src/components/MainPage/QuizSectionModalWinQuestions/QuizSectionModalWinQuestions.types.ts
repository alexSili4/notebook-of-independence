import { Func } from '@/types/functions.types';
import { RefDivObject } from '@/types/types';

export interface IProps {
  containerRef: RefDivObject;
  incrementCurrentQuestion: Func;
  incrementTotalScore: Func;
}
