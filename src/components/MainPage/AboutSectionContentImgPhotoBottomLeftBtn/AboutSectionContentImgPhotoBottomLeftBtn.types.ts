import { Func, OnBtnClickFunc } from '@/types/functions.types';

export interface IProps {
  onClick: OnBtnClickFunc;
  isCurrentStep: boolean;
  inFocus: boolean;
  onMouseEnter: Func;
}

export interface IStyledPhotoBottomLeftProps {
  inFocus: boolean;
}
