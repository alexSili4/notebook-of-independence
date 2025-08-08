import { Func, OnBtnClickFunc } from '@/types/functions.types';

export interface IProps {
  onClick: OnBtnClickFunc;
  isCurrentStep: boolean;
  onMouseEnter: Func;
}
